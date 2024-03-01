package edu.famu.gametrack.Model;

import com.google.cloud.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BaseGameTrack {
    protected @Nullable Timestamp LastPlayed;
    protected @Nullable String userGameId;
    protected String status;
    protected Integer playtime;

}
