package edu.famu.gametrack.Services;

import com.google.cloud.firestore.Firestore;
import edu.famu.gametrack.Model.Interaction;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;

@Service
public class InteractionService {

    private final Firestore db;

    public InteractionService(Firestore db) {
        this.db = db;
    }

    public Interaction logInteraction(Interaction interaction) throws ExecutionException, InterruptedException {
        String docId = db.collection("interactions").document().getId();
        interaction.setId(docId); // Generate a new ID for the interaction
        db.collection("interactions").document(docId).set(interaction).get();
        return interaction;
    }

    // Additional methods to handle fetching, updating, and deleting interactions can be added
}
