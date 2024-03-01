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
public class RestFeedback extends BaseFeedback {
    private DocumentReference userId;

    public RestFeedback(Timestamp DateSubmitted, String feedbackId, String FeedbackContent, DocumentReference userId) {
        super(DateSubmitted, feedbackId, FeedbackContent);
        this.userId = userId;
    }

    public void userId(String userId, Firestore db) {
        this.userId = db.collection("Feedback").document(userId);
    }
}
