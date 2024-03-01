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
public class RestSystemActivityLog extends BaseSystemActivityLog {
    private DocumentReference userId;

    public RestSystemActivityLog(String ActivityDescription, String LogId, Timestamp createdAt, DocumentReference userId) {
        super(ActivityDescription, LogId, createdAt);
        this.userId = userId;
    }

    public void userId(String userId, Firestore db) {
        this.userId = db.collection("User").document(userId);
    }
}
