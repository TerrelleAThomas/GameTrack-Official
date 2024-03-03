package edu.famu.gametrack.Controller;

import edu.famu.gametrack.Model.Flag;
import edu.famu.gametrack.Services.FlagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/flags")
public class FlagController {

    private final FlagService flagService;

    @Autowired
    public FlagController(FlagService flagService) {
        this.flagService = flagService;
    }

    @PostMapping
    public ResponseEntity<?> createFlag(@RequestBody Flag flag) {
        try {
            Flag createdFlag = flagService.createFlag(flag);
            return ResponseEntity.ok(createdFlag);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error flagging comment: " + e.getMessage());
        }
    }

    @GetMapping("/{flagId}")
    public ResponseEntity<?> getFlagById(@PathVariable String flagId) {
        try {
            Flag flag = flagService.getFlagById(flagId);
            return flag != null ? ResponseEntity.ok(flag) : ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving flag: " + e.getMessage());
        }
    }

    // Additional endpoints for updating, deleting, and listing flags can be added here.
}
