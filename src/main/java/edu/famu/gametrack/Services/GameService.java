package edu.famu.gametrack.Services;


import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import edu.famu.gametrack.Model.Game;
import org.springframework.stereotype.Service;

@Service
public class GameService {

    private final Firestore db;

    public GameService() {
        this.db = FirestoreClient.getFirestore();
    }

    public Game createGame(Game game) throws Exception {
        String docId = game.getGameId() != null ? game.getGameId() : db.collection("games").document().getId();
        game.setGameId(docId); // Ensure the game object has the correct ID
        db.collection("games").document(docId).set(game).get();
        return game; // Return the saved game
    }

    public Game getGameById(String gameId) throws Exception {
        DocumentSnapshot documentSnapshot = db.collection("games").document(gameId).get().get();
        if (documentSnapshot.exists()) {
            return documentSnapshot.toObject(Game.class);
        } else {
            throw new Exception("Game not found");
        }
    }

    public Game updateGame(String gameId, Game game) throws Exception {
        db.collection("games").document(gameId).set(game).get();
        return game; // Return the updated game
    }

    public void deleteGame(String gameId) throws Exception {
        db.collection("games").document(gameId).delete().get();
    }
}

