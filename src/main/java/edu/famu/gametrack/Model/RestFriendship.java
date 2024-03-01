package edu.famu.gametrack.Model;

import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
public class RestFriendship extends BaseFriendship {

    private DocumentReference user1;
    private DocumentReference user2;

    public RestFriendship(String friendshipId, String status, DocumentReference user1, DocumentReference user2) {
        super(friendshipId, status);
        this.user1 = user1;
        this.user2 = user2;
    }

    public void user1(String user1, Firestore db) {
        this.user1 = db.collection("User").document(user1);
    }

    public void user2(String user2, Firestore db) {
        this.user2 = db.collection("User").document(user2);
    }
}
