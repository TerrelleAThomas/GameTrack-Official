package edu.famu.gametrack.Controller;

import edu.famu.gametrack.Model.Friendship;
import edu.famu.gametrack.Services.FriendshipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/friendships")
public class FriendshipController {

    @Autowired
    private FriendshipService FriendshipService;

    @PostMapping
    public ResponseEntity<?> createFriendship(@RequestBody Friendship friendship) {
        try {
            Friendship createdFriendship = FriendshipService.createFriendship(friendship);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdFriendship);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating friendship: " + e.getMessage());
        }
    }

    @GetMapping("/{friendshipId}")
    public ResponseEntity<?> getFriendshipById(@PathVariable String friendshipId) {
        try {
            Friendship friendship = FriendshipService.getFriendshipById(friendshipId);
            return ResponseEntity.ok(friendship);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Friendship not found: " + e.getMessage());
        }
    }

    @PutMapping("/{friendshipId}")
    public ResponseEntity<?> updateFriendship(@PathVariable String friendshipId, @RequestBody Friendship friendship) {
        try {
            Friendship updatedFriendship = FriendshipService.updateFriendship(friendshipId, friendship);
            return ResponseEntity.ok(updatedFriendship);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating friendship: " + e.getMessage());
        }
    }

    @DeleteMapping("/{friendshipId}")
    public ResponseEntity<?> deleteFriendship(@PathVariable String friendshipId) {
        try {
            FriendshipService.deleteFriendship(friendshipId);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting friendship: " + e.getMessage());
        }
    }
}
