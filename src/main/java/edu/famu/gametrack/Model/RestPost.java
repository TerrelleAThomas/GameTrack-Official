package edu.famu.gametrack.Model;

import com.google.cloud.Timestamp;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RestPost extends BasePost {
    private DocumentReference gameId;
    private DocumentReference userId;

    public RestPost(String PostId, Timestamp DeleteDate, String Title, Timestamp UpdateDate, String content, Timestamp creationDate, DocumentReference gameId, DocumentReference userId) {
        super(PostId, DeleteDate, Title, UpdateDate, content, creationDate);
        this.gameId = gameId;
        this.userId = userId;
    }


    public void gameId(String gameId, Firestore db) {
        this.gameId = db.collection("IGBD").document(gameId);
    }

    public void userId(String userId, Firestore db) {
        this.userId = db.collection("User").document(userId);
    }
}
