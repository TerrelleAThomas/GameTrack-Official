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
public class RestGameTrack extends BaseGameTrack {
    private DocumentReference GameId;
    private DocumentReference userId;

    public RestGameTrack(Timestamp LastPlayed, String userGameId, String status, Integer playtime, DocumentReference gameId, DocumentReference userId) {
        super(LastPlayed, userGameId, status, playtime);
        this.GameId = gameId;
        this.userId = userId;
    }

    public void GameId(String GameId, Firestore db) {
        this.GameId = db.collection("Game").document(GameId);
    }

    public void userId(String userId, Firestore db) {
        this.userId = db.collection("User").document(userId);
    }
}
