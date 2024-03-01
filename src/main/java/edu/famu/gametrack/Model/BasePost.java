package edu.famu.gametrack.Model;

import com.google.cloud.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import java.time.Instant;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BasePost {
    protected @Nullable String PostId;
    protected @Nullable Timestamp DeleteDate;
    protected  String Title;
    protected  @Nullable Timestamp UpdateDate;
    protected String content;
    protected @Nullable Timestamp creationDate;

    @Nullable
    public String getPostId(String id) {
        return PostId;
    }

    @Nullable
    public Timestamp getDeleteDate() {
        return DeleteDate;
    }


    @Nullable
    public Timestamp getUpdateDate(Instant now) {
        return UpdateDate;
    }
    @Nullable
    public Timestamp getCreationDate(Instant now) {
        return creationDate;
    }
}
