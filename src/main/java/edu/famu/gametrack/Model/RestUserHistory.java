package edu.famu.gametrack.Model;

import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RestUserHistory extends BaseUserHistory {

    private DocumentReference userId;

    public RestUserHistory(String _id, String[] interactions, DocumentReference userId) {
        super(_id, List.of(interactions));
        this.userId = userId;
    }

    public void userId(String userId, Firestore db) {
        this.userId = db.collection("User").document(userId);
    }
}
