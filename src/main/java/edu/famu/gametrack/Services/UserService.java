package edu.famu.gametrack.Services;

import com.google.api.core.ApiFuture;
import com.google.cloud.Timestamp;
import com.google.cloud.firestore.*;
import edu.famu.gametrack.Model.User;
import org.springframework.stereotype.Service;
import edu.famu.gametrack.Controller.AdminController;

import java.util.*;
import java.util.concurrent.ExecutionException;

@Service
public class UserService {
    private static Firestore firestore = null;

    public UserService(Firestore firestore) {
        UserService.firestore = firestore;
    }

    public String createUser(User user) throws ExecutionException, InterruptedException {
        user.setCreatedAt(Timestamp.now());
        // user.setLastLogin(Timestamp.now()); // You can uncomment this if you want to set last login time during user creation.

        // Use 'firestore' directly here instead of 'db'
        ApiFuture<DocumentReference> future = firestore.collection("User").add(user);
        DocumentReference userRef = future.get();

        return userRef.getId();
    }


    /*public String createUser(User user) throws ExecutionException, InterruptedException {
        // Assign roles based on criteria (isAdmin, isSiteAdmin)
        assignAdminRoles(user); // Assume this method sets the isAdmin and isSiteAdmin fields based on your criteria
        user.setCreatedAt(Timestamp.now());
        ApiFuture<DocumentReference> future = firestore.collection("User").add(user);
        return future.get().getId();
    }*/

    private void assignAdminRoles(User user) {
        // Example logic to assign roles
        // This should be replaced with your actual logic
        String adminEmail = "admin@example.com"; // Consider fetching from environment or config
        String siteAdminEmail = "siteadmin@example.com"; // Consider fetching from environment or config
        user.setAdmin(user.getEmail().equalsIgnoreCase(adminEmail));
        user.setSiteAdmin(user.getEmail().equalsIgnoreCase(siteAdminEmail));
    }

    public void updateUserByUsername(String username, Map<String, Object> updateValues) throws ExecutionException, InterruptedException {
        DocumentReference userDocRef = findUserDocByUsername(username);
        if (userDocRef != null) {
            userDocRef.update(updateValues).get();
        }
    }

    public User getUserByUsername(String username) throws ExecutionException, InterruptedException {
        DocumentReference docRef = findUserDocByUsername(username);
        if (docRef != null) {
            DocumentSnapshot document = (DocumentSnapshot) docRef.get();
            return document.toObject(User.class);
        }
        return null;
    }

    public User getUserByEmail(String email) throws ExecutionException, InterruptedException {
        Query query = firestore.collection("User").whereEqualTo("email", email);
        ApiFuture<QuerySnapshot> future = query.get();
        for (DocumentSnapshot document : future.get().getDocuments()) {
            return document.toObject(User.class);
        }
        return null;
    }

    public boolean deleteUserByUsername(String username) throws ExecutionException, InterruptedException {
        DocumentReference userDocRef = findUserDocByUsername(username);
        if (userDocRef != null) {
            DocumentSnapshot document = (DocumentSnapshot) userDocRef.get();
            User user = document.toObject(User.class);
            if (user != null && (user.isAdmin() || user.isSiteAdmin())) {
                userDocRef.delete().get();
                return true;
            }
        }
        return false;
    }


    public static boolean deactivateUserByUsername(String Username) throws ExecutionException, InterruptedException {
        DocumentReference userDocRef = findUserDocByUsername(Username);
        if (userDocRef != null) {
            // Update the isActive field to false
            Map<String, Object> updates = new HashMap<>();
            updates.put("isActive", false); // Use the correct field name as per your model
            userDocRef.update(updates).get();
            return true;
        }
        return false;
    }

    // Helper method to find a user document by username
    private static DocumentReference findUserDocByUsername(String username) throws ExecutionException, InterruptedException {
        Query query = firestore.collection("User").whereEqualTo("username", username);
        ApiFuture<QuerySnapshot> future = query.get();
        for (DocumentSnapshot document : future.get().getDocuments()) {
            return document.getReference();
        }
        return null;
    }

    public boolean activateUserByUsername(String username) {
        try {
            // Attempt to find the user document by username
            DocumentReference userDocRef = findUserDocByUsername(username);
            if (userDocRef != null) {
                // Prepare the update for the isActive field
                Map<String, Object> updates = new HashMap<>();
                updates.put("isActive", true); // Assuming 'isActive' is the field in your Firestore document

                // Execute the update
                userDocRef.update(updates).get(); // Wait for the update to complete
                return true; // Return true indicating the user has been successfully activated
            }
        } catch (InterruptedException | ExecutionException e) {
            // Log the exception (consider using a logging framework)
            System.err.println("Error activating user: " + e.getMessage());
            Thread.currentThread().interrupt(); // Restore the interrupted status
        }
        return false; // Return false if the user could not be found or if an error occurred
    }


}
