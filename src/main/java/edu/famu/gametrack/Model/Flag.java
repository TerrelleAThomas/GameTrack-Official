package edu.famu.gametrack.Model;

import com.google.cloud.Timestamp;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
public class Flag extends BaseFlag {
    private String commentId;
    private String postId;
    private String userId;

    public Flag(Timestamp DateFlagged, String FlagId, String reason, String commentId, String postId, String userId) {
        super(DateFlagged, FlagId, reason);
        this.commentId = commentId;
        this.postId = postId;
        this.userId = userId;
    }
}
