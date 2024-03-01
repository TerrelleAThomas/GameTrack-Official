package edu.famu.gametrack.Model;

import com.google.cloud.firestore.annotation.DocumentId;
import com.google.protobuf.Timestamp;
import com.google.protobuf.util.Timestamps;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import java.text.ParseException;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Game {
    @DocumentId

    protected @Nullable String GameId;
    protected String Tile;
    protected String Description;
    protected String Sports;
    protected @Nullable Timestamp ReleaseDate;

    void ReleaseDate(String ReleaseDate) throws ParseException {
        this.ReleaseDate = Timestamps.parse(ReleaseDate);
    }


}
