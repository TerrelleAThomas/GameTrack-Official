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
public class RestInteraction extends BaseInteraction {
    private DocumentReference igdbGameId;
    private DocumentReference userId;

    public RestInteraction(String Id, String contentType, Timestamp dateDeleted, Timestamp datePosted, Timestamp dateUpdated, Timestamp dateViewed, DocumentReference igdbGameId, DocumentReference userId) {
        super(Id, contentType, dateDeleted, datePosted, dateUpdated, dateViewed);
        this.igdbGameId = igdbGameId;
        this.userId = userId;
    }

    public void igdbGameId(String igdbGameId, Firestore db) {
        this.igdbGameId = db.collection("IGBD").document(igdbGameId);
    }

    public void userId(String userId, Firestore db) {
        this.userId = db.collection("User").document(userId);
    }

}
