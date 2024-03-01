package edu.famu.gametrack.Model;

import com.google.cloud.Timestamp;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
public class Feedback extends BaseFeedback {
    private String userId;

    public Feedback(Timestamp DateSubmitted, String feedbackId, String FeedbackContent, String userId) {
        super(DateSubmitted, feedbackId, FeedbackContent);
        this.userId = userId;
    }
}
