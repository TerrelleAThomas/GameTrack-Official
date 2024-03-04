package edu.famu.gametrack.Controller;

import edu.famu.gametrack.Model.Interaction;
import edu.famu.gametrack.Services.InteractionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/interactions")
public class InteractionController {

    @Autowired
    private InteractionService interactionService;

    @PostMapping
    public ResponseEntity<?> logUserInteraction(@RequestBody Interaction interaction) {
        try {
            Interaction loggedInteraction = interactionService.logInteraction(interaction);
            return new ResponseEntity<>(loggedInteraction, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Error logging interaction: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Endpoints for fetching, updating, and deleting interactions would follow a similar pattern
}

