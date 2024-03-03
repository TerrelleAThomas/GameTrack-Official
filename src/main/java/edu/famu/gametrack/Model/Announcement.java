package edu.famu.gametrack.Model;

import com.google.cloud.firestore.annotation.DocumentId;
import com.google.protobuf.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Data;
import com.google.protobuf.util.Timestamps;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import java.text.ParseException;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class Announcement {
    @DocumentId

    protected @Nullable String AnnouncementId;
    protected String AnnouncementContent;
    protected @Nullable Timestamp DateCreated;

    void setDateCreated(String dateCreated) throws ParseException {
        this.DateCreated = Timestamps.parse(dateCreated);
    }
}
