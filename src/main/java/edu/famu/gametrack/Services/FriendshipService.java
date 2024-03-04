package edu.famu.gametrack.Services;

import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import edu.famu.gametrack.Model.Friendship;
import org.springframework.stereotype.Service;

@Service
public class FriendshipService {

    private final Firestore db = FirestoreClient.getFirestore();

    public Friendship createFriendship(Friendship friendship) throws Exception {
        String docId = db.collection("friendships").document().getId();
        friendship.setFriendshipId(docId); // Assuming you have a setter for friendshipId in your model
        db.collection("friendships").document(docId).set(friendship).get();
        return friendship;
    }

    public Friendship getFriendshipById(String friendshipId) throws Exception {
        DocumentSnapshot documentSnapshot = db.collection("friendships").document(friendshipId).get().get();
        if (documentSnapshot.exists()) {
            return documentSnapshot.toObject(Friendship.class);
        } else {
            throw new Exception("Friendship not found");
        }
    }

    public Friendship updateFriendship(String friendshipId, Friendship friendship) throws Exception {
        db.collection("friendships").document(friendshipId).set(friendship).get();
        return friendship;
    }

    public void deleteFriendship(String friendshipId) throws Exception {
        db.collection("friendships").document(friendshipId).delete().get();
    }
}
