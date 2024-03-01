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
public class RestFlag extends BaseFlag {
    private DocumentReference commentId;
    private  DocumentReference postId;
    private DocumentReference userId;

    public RestFlag(Timestamp DateFlagged, String FlagId, String reason, DocumentReference commentId, DocumentReference postId, DocumentReference userId) {
        super(DateFlagged, FlagId, reason);
        this.commentId = commentId;
        this.postId = postId;
        this.userId = userId;
    }

    public void commentId(String commentId, Firestore db) {
        this.commentId = db.collection("Comment").document(commentId);
    }

    public void postId(String postId, Firestore db) {
        this.postId = db.collection("Post").document(postId);
    }

    public void userId(String userId, Firestore db) {
        this.userId = db.collection("User").document(userId);
    }
}
