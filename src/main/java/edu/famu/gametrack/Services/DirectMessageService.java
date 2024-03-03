package edu.famu.gametrack.Services;

import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import com.google.firebase.messaging.Message;
import edu.famu.gametrack.Model.DirectMessage;
import org.springframework.stereotype.Service;

@Service
public class DirectMessageService {

    private final Firestore db;

    public DirectMessageService() {
        this.db = FirestoreClient.getFirestore();
    }

    public Message createMessage(Message message) throws Exception {
        String docId = message.toString() != null ? message.toString() : db.collection("DirectMessage").document().getId();
        message.toString();
        db.collection("DirectMessage").document(docId).set(message).get();
        return message;
    }

    public Message getMessageById(String messageId) throws Exception {
        DocumentSnapshot documentSnapshot = db.collection("DirectMessage").document(messageId).get().get();
        if (documentSnapshot.exists()) {
            return documentSnapshot.toObject(Message.class);
        } else {
            throw new Exception("Message not found");
        }
    }

    public Message updateMessage(String messageId, Message message) throws Exception {
        db.collection("DirectMessage").document(messageId).set(message).get();
        return message;
    }

    public void deleteMessage(String messageId) throws Exception {
        db.collection("DirectMessage").document(messageId).delete().get();
    }
}
