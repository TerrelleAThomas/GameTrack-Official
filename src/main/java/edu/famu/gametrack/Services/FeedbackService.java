package edu.famu.gametrack.Services;

import com.google.api.core.ApiFuture;
import com.google.cloud.Timestamp;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import edu.famu.gametrack.Model.Feedback;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;

@Service
public class FeedbackService {

    private final Firestore db = FirestoreClient.getFirestore();

    public Feedback createFeedback(Feedback feedback) throws InterruptedException, ExecutionException {
        DocumentReference documentReference = db.collection("Feedback").document();
        feedback.setFeedbackId(documentReference.getId());
        feedback.setDateSubmitted(Timestamp.now().now());
        documentReference.set(feedback).get();
        return feedback;
    }

    public Feedback getFeedbackById(String feedbackId) throws InterruptedException, ExecutionException {
        DocumentReference documentReference = db.collection("Feedback").document(feedbackId);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        if (document.exists()) {
            return document.toObject(Feedback.class);
        } else {
            return null;
        }
    }

    public Feedback updateFeedback(String feedbackId, Feedback feedback) throws InterruptedException, ExecutionException {
        DocumentReference documentReference = db.collection("Feedback").document(feedbackId);
        feedback.setFeedbackId(feedbackId);
        documentReference.set(feedback).get();
        return feedback;
    }

    public boolean deleteFeedback(String feedbackId) throws InterruptedException, ExecutionException {
        DocumentReference documentReference = db.collection("Feedback").document(feedbackId);
        ApiFuture<WriteResult> writeResult = documentReference.delete();
        return writeResult.get().getUpdateTime() != null;
    }
}
