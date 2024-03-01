package edu.famu.gametrack.Model;

import com.google.cloud.Timestamp;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
public class GamePlay extends BaseGamePlay {
    private String GameId;
    private  String userId;

    public GamePlay(Timestamp DateOfPlayTime, String playId, String gameId, String userId) {
        super(DateOfPlayTime, playId);
        this.GameId = gameId;
        this.userId = userId;
    }
}
