package edu.famu.gametrack.Services;

import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import edu.famu.gametrack.Model.Comment;
import org.springframework.stereotype.Service;

@Service
public class CommentService {

    private Firestore db;

    public CommentService() {
        this.db = FirestoreClient.getFirestore();
    }

    public Comment createComment(Comment comment) throws Exception {
        String docId = comment.getCommentId()!= null ? comment.getCommentId() : db.collection("comments").document().getId();
        comment.setCommentId(docId); // Ensure the comment object has the correct ID
        db.collection("comments").document(docId).set(comment).get();
        return comment; // Return the saved comment
    }

    public Comment getCommentById(String commentId) throws Exception {
        DocumentSnapshot documentSnapshot = db.collection("comments").document(commentId).get().get();
        if (documentSnapshot.exists()) {
            return documentSnapshot.toObject(Comment.class);
        } else {
            throw new Exception("Comment not found");
        }
    }

    public Comment updateComment(String commentId, Comment comment) throws Exception {
        db.collection("comments").document(commentId).set(comment).get();
        return comment; // Return the updated comment
    }

    public void deleteComment(String commentId) throws Exception {
        db.collection("comments").document(commentId).delete().get();
    }
}
