package edu.famu.gametrack.Services;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import edu.famu.gametrack.Model.userSearch;

import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;


@Service
public class userSearchService {

    public userSearch createUserSearch(userSearch userSearch) throws ExecutionException, InterruptedException {
        Firestore db = FirestoreClient.getFirestore();
        DocumentReference docRef = db.collection("UserSearch").document(userSearch.getSearchId());
        ApiFuture<DocumentSnapshot> future = docRef.get();
        DocumentSnapshot document = future.get(); // This line can throw ExecutionException and InterruptedException
        if (document.exists()) {
            docRef.set(userSearch);
        } else {
            db.collection("UserSearch").document(userSearch.getSearchId()).set(userSearch);
        }
        return userSearch;
    }

    public userSearch getUserSearch(String searchId) throws ExecutionException, InterruptedException {
        Firestore db = FirestoreClient.getFirestore();
        DocumentReference docRef = db.collection("UserSearch").document(searchId);
        ApiFuture<DocumentSnapshot> future = docRef.get();
        DocumentSnapshot document = future.get(); // This line can throw ExecutionException and InterruptedException
        if (document.exists()) {
            return document.toObject(userSearch.class);
        } else {
            throw new IllegalStateException("UserSearch not found for ID: " + searchId);
        }
    }

    public void updateUserStatus(String userId, String status) throws ExecutionException, InterruptedException {
        Firestore db = FirestoreClient.getFirestore();
        DocumentReference userRef = db.collection("GameTrack").document(userId);
        userRef.update("status", status).get(); // Ensure the update completes before proceeding. This line can throw ExecutionException and InterruptedException
    }


    public userSearch createuserSearch(userSearch userSearch) throws ExecutionException, InterruptedException {
        Firestore db = FirestoreClient.getFirestore();
        // Assuming UserSearch has a unique ID that can be used as the document ID
        String documentId = userSearch.getSearchId(); // Ensure this method exists in your UserSearch class
        if (documentId == null || documentId.isEmpty()) {
            // Handle case where searchId is null or empty
            documentId = db.collection("UserSearch").document().getId();
            userSearch.setSearchId(documentId); // Ensure this setter method exists
        }
        DocumentReference docRef = db.collection("UserSearch").document(documentId);

        // Asynchronously write data
        ApiFuture<WriteResult> result = docRef.set(userSearch);

        // .get() blocks on response
        System.out.println("Update time : " + result.get().getUpdateTime());

        return userSearch;
    }
}
