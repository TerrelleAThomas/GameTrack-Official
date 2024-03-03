package edu.famu.gametrack.Controller;

import edu.famu.gametrack.Model.Game;
import edu.famu.gametrack.Services.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/games")
public class GameController {

    @Autowired
    private GameService gameService;

    @PostMapping
    public ResponseEntity<?> createGame(@RequestBody Game game) {
        try {
            Game createdGame = gameService.createGame(game);
            return ResponseEntity.ok(createdGame);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating game: " + e.getMessage());
        }
    }

    @GetMapping("/{gameId}")
    public ResponseEntity<?> getGameById(@PathVariable String gameId) {
        try {
            Game game = gameService.getGameById(gameId);
            if (game != null) {
                return ResponseEntity.ok(game);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving game: " + e.getMessage());
        }
    }

    @PutMapping("/{gameId}")
    public ResponseEntity<?> updateGame(@PathVariable String gameId, @RequestBody Game game) {
        try {
            Game updatedGame = gameService.updateGame(gameId, game);
            return ResponseEntity.ok(updatedGame);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating game: " + e.getMessage());
        }
    }

    @DeleteMapping("/{gameId}")
    public ResponseEntity<?> deleteGame(@PathVariable String gameId) {
        try {
            gameService.deleteGame(gameId);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting game: " + e.getMessage());
        }
    }
}

