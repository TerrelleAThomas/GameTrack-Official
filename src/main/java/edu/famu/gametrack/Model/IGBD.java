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
public class IGBD {
    @DocumentId

    protected @Nullable String IGDBId;
    protected String Creator;
    protected String Title;
    protected String Description;
    protected String Genre;
    protected String Platform;
    protected int IGDBIdRate;
    protected @Nullable Timestamp ReleaseDate;

    void ReleaseDate(String ReleaseDate) throws ParseException {
        this.ReleaseDate = Timestamps.parse(ReleaseDate);
    }

}
