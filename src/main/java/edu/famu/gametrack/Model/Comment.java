package edu.famu.gametrack.Model;

import com.google.cloud.Timestamp;
import com.google.cloud.firestore.annotation.DocumentId;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
public class Comment extends BaseComment {

    private String postId;
    private String userId;

    public Comment(String CommentId, Timestamp CreationDate, Timestamp DeleteDate, Timestamp UpdateDate, String content, String postId, String userId) {
        super(CommentId, CreationDate, DeleteDate, UpdateDate, content);
        this.postId = postId;
        this.userId = userId;
    }

    public String getPostId() {
        return postId;
    }
}
