package edu.famu.gametrack.Model;

import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RestUserSearch extends BaseUsersearch {

    private DocumentReference userId;
    private DocumentReference resultUserId;

    public RestUserSearch(String searchId, DocumentReference userId, DocumentReference resultUserId) {
        super(searchId);
        this.userId = userId;
        this.resultUserId = resultUserId;
    }

    public void userId(String userId, Firestore db) {
        this.userId = db.collection("User").document(userId);}

    public void resultUserId(String resultUserId, Firestore db) {
        this.resultUserId = db.collection("User").document(resultUserId);}
}
