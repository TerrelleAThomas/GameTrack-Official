package edu.famu.gametrack.Model;

import com.google.cloud.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BaseInteraction {

    protected @Nullable String Id;
    protected @Nullable String contentType;
    protected @Nullable Timestamp dateDeleted;
    protected @Nullable Timestamp datePosted;
    protected @Nullable Timestamp dateUpdated;
    protected @Nullable Timestamp dateViewed;

    public void setId(@Nullable String id) {
        Id = id;
    }
}
