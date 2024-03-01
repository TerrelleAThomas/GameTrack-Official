package edu.famu.gametrack.Services;

import com.google.api.core.ApiFuture;
import com.google.cloud.Timestamp;
import com.google.cloud.firestore.*;
import edu.famu.gametrack.Model.User;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.ExecutionException;

@Service
public class UserService {
    private final Firestore db;

    public UserService(Firestore db) {
        this.db = db;
    }

    public String createUser(User user) throws ExecutionException, InterruptedException {
        user.setCreatedAt(Timestamp.now());
        ApiFuture<DocumentReference> future = db.collection("User").add(user);
        return future.get().getId();
    }

    public void updateUser(String _Id, Map<String, Object> updateValues) throws ExecutionException, InterruptedException {
        DocumentReference userDocRef = db.collection("users").document(_Id);
        ApiFuture<WriteResult> writeResult = userDocRef.update(updateValues);
        writeResult.get();
    }

    public User getUserById(String _Id) throws ExecutionException, InterruptedException {
        DocumentReference docRef = db.collection("users").document(_Id);
        ApiFuture<DocumentSnapshot> future = docRef.get();
        DocumentSnapshot document = future.get();
        if (document.exists()) {
            return document.toObject(User.class);
        } else {
            // Handle the case where the user doesn't exist in the database
            // This might involve throwing a custom exception or returning null
            return null;
        }
    }


    public void updateUserByUsername(String username, Map<String, Object> updateValues) throws ExecutionException, InterruptedException {
        Query query = db.collection("User").whereEqualTo("username", username);
        ApiFuture<QuerySnapshot> future = query.get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        if (!documents.isEmpty()) {
            DocumentReference userDoc = documents.get(0).getReference();
            userDoc.update(updateValues);
        }
    }

    public User getUserByUsername(String username) throws ExecutionException, InterruptedException {
        Query query = db.collection("User").whereEqualTo("username", username);
        ApiFuture<QuerySnapshot> future = query.get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        if (!documents.isEmpty()) {
            return documents.get(0).toObject(User.class);
        }
        return null;
    }

    public User getUserByEmail(String email) throws ExecutionException, InterruptedException {
        Query query = db.collection("User").whereEqualTo("email", email);
        ApiFuture<QuerySnapshot> future = query.get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        if (!documents.isEmpty()) {
            return documents.get(0).toObject(User.class);
        }
        return null;
    }

    public void deleteUserByUsername(String username) throws ExecutionException, InterruptedException {
        Query query = db.collection("User").whereEqualTo("username", username);
        ApiFuture<QuerySnapshot> future = query.get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        if (!documents.isEmpty()) {
            DocumentReference userDoc = documents.get(0).getReference();
            userDoc.delete();
        }
    }
}
