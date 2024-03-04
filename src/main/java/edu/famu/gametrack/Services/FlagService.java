package edu.famu.gametrack.Services;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import edu.famu.gametrack.Model.Comment;
import edu.famu.gametrack.Model.Flag;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.ExecutionException;

@Service
public class FlagService {

    private final Firestore db;

    public FlagService(Firestore db) {

        this.db = db;
    }

    public Flag createFlag(Flag flag) throws Exception {
        String docId = flag.getFlagId() != null ? flag.getFlagId() : db.collection("Flag").document().getId();
        flag.setFlagId(docId);
        db.collection("Flag").document(docId).set(flag).get();
        return flag;
    }

    public Flag getFlagById(String flagId) throws Exception {
        DocumentSnapshot documentSnapshot = db.collection("Flag").document(flagId).get().get();
        if (documentSnapshot.exists()) {
            return documentSnapshot.toObject(Flag.class);
        } else {
            throw new Exception("Flag not found");
        }
    }

    public String flagComment(String commentId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference commentRef = dbFirestore.collection("Flag").document(commentId);

        // Check if the comment exists
        if (!commentRef.get().get().exists()) {
            throw new NoSuchElementException("Comment with ID " + commentId + " does not exist.");
        }

        // Create a flag
        Map<String, Object> flag = new HashMap<>();
        flag.put("flaggedDate", new Date());
        flag.put("commentId", commentId); // Only necessary if you need to easily query flags independently of comments

        // Add a flag to the comment as a subcollection
        ApiFuture<DocumentReference> future = commentRef.collection("Flag").add(flag);

        // Return the ID of the newly created flag
        return future.get().getId();
    }

    public List<Map<String, Object>> getFlaggedComments() throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<QuerySnapshot> future = dbFirestore.collection("Flag").whereArrayContains("flags", true).get();

        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        List<Map<String, Object>> flaggedComments = new ArrayList<>();
        for (QueryDocumentSnapshot document : documents) {
            Map<String, Object> commentData = document.getData();
            // Add only flagged comments
            if (commentData.getOrDefault("flags", false).equals(true)) {
                flaggedComments.add(commentData);
            }
        }

        return flaggedComments;
    }
    // Additional methods for updating, deleting, and listing flags can be implemented here.
}

