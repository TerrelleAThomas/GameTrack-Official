package edu.famu.gametrack.Model;

import com.google.cloud.Timestamp;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
public class RestDirectMessage extends BaseDirectMessage {
    private DocumentReference receiverId;
    private DocumentReference senderId;

    public RestDirectMessage(String messageId, Timestamp CreatedAt, String content) {
        super(messageId, CreatedAt, content);
        this.receiverId = receiverId;
        this.senderId = senderId;

    }

    public void setreceiverId(String receiverID, Firestore db) {
        this.receiverId = db.collection("DirectMessage").document(receiverID);
    }

    public void setsenderId(String senderID, Firestore db) {
        this.senderId = db.collection("DirectMessage").document(senderID);
    }
}
