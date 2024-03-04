package edu.famu.gametrack.Controller;

import edu.famu.gametrack.Services.userSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/userSearch")
public class userSearchController {

    private final userSearchService userSearchService;

    @Autowired
    public userSearchController(userSearchService userSearchService) {
        this.userSearchService = userSearchService;
    }

    @GetMapping
    public ResponseEntity<?> search(@RequestParam String query) {
        try {
            List<Object> results = userSearchService.searchForUsers(query);
            return ResponseEntity.ok(results);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error performing search: " + e.getMessage());
        }
    }
}
