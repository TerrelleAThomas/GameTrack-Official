package edu.famu.gametrack.Model;

import com.google.cloud.Timestamp;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
public class RestComment extends BaseComment {
    private DocumentReference postId;
    private DocumentReference userId;

    public RestComment(String CommentId, Timestamp CreationDate, Timestamp DeleteDate, Timestamp UpdateDate, String content) {
        super(CommentId, CreationDate, DeleteDate, UpdateDate, content);
        this.postId = postId;
        this.userId = userId;
    }

    public void setPostId(String postId, Firestore db) {
        this.postId = db.collection("User").document(postId);
    }

    public void setUserId(String userId, Firestore db) {
        this.userId = db.collection("User").document(userId);
    }
}
