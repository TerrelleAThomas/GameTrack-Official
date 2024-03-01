package edu.famu.gametrack.Model;

import com.google.cloud.Timestamp;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
public class GameTrack extends BaseGameTrack {

    private String GameId;
    private  String userId;

    public GameTrack(Timestamp LastPlayed, String userGameId, String status, Integer playtime, String gameId, String userId) {
        super(LastPlayed, userGameId, status, playtime);
        this.GameId = gameId;
        this.userId = userId;
    }
}
