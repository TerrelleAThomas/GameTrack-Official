package edu.famu.gametrackcode.Controller;

import edu.famu.gametrackcode.Model.userSearch;
import edu.famu.gametrackcode.Services.userSearchService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api/usersearch")
public class userSearchController {
    private final userSearchService userSearchService;

    @Autowired
    public userSearchController(userSearchService userSearchService) {
        this.userSearchService = userSearchService;
    }

    @PostMapping
    public ResponseEntity<String> createUserSearch(@RequestBody userSearch userSearch) {
        try {
            userSearch createdUserSearch = userSearchService.createUserSearch(userSearch); // Adjust method call
            return ResponseEntity.ok(String.valueOf(createdUserSearch));
        } catch (ExecutionException | InterruptedException e) {
            Thread.currentThread().interrupt(); // Properly handle InterruptedException
            return ResponseEntity.status(500).body("Error processing request: " + e.getMessage());
        }
    }

    @GetMapping("/{searchId}")
    public ResponseEntity<?> getUserSearch(@PathVariable String searchId) {
        try {
            userSearch userSearch = userSearchService.getUserSearch(searchId); // Adjust method call
            if (userSearch != null) {
                return ResponseEntity.ok(userSearch);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (ExecutionException e) {
            return ResponseEntity.status(500).body("Error retrieving user search: " + e.getMessage());
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt(); // Properly handle InterruptedException
            return ResponseEntity.status(500).body("Error retrieving user search: " + e.getMessage());
        }
    }
}

