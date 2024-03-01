package edu.famu.gametrack.Model;

import com.google.cloud.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Interaction extends BaseInteraction {
    private String igdbGameId;
    private String userId;

    public Interaction(String Id, String contentType, Timestamp dateDeleted, Timestamp datePosted, Timestamp dateUpdated, Timestamp dateViewed, String igdbGameId, String userId) {
        super(Id, contentType, dateDeleted, datePosted, dateUpdated, dateViewed);
        this.igdbGameId = igdbGameId;
        this.userId = userId;
    }
}
