package edu.famu.gametrack.Services;

import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import edu.famu.gametrack.Model.Flag;
import org.springframework.stereotype.Service;

@Service
public class FlagService {

    private final Firestore db;

    public FlagService() {
        this.db = FirestoreClient.getFirestore();
    }

    public Flag createFlag(Flag flag) throws Exception {
        String docId = flag.getFlagId() != null ? flag.getFlagId() : db.collection("flags").document().getId();
        flag.setFlagId(docId);
        db.collection("flags").document(docId).set(flag).get();
        return flag;
    }

    public Flag getFlagById(String flagId) throws Exception {
        DocumentSnapshot documentSnapshot = db.collection("flags").document(flagId).get().get();
        if (documentSnapshot.exists()) {
            return documentSnapshot.toObject(Flag.class);
        } else {
            throw new Exception("Flag not found");
        }
    }

    // Additional methods for updating, deleting, and listing flags can be implemented here.
}

