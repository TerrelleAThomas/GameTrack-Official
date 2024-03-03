package edu.famu.gametrack.Controller;


import com.google.firebase.messaging.Message;
import edu.famu.gametrack.Services.DirectMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/messages")
public class DirectMessageController {

    @Autowired
    private DirectMessageService messageService;

    @PostMapping
    public ResponseEntity<?> createMessage(@RequestBody Message message) {
        try {
            Message createdMessage = messageService.createMessage(message);
            return ResponseEntity.ok(createdMessage);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating message: " + e.getMessage());
        }
    }

    @GetMapping("/{messageId}")
    public ResponseEntity<?> getMessageById(@PathVariable String messageId) {
        try {
            Message message = messageService.getMessageById(messageId);
            if (message != null) {
                return ResponseEntity.ok(message);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving message: " + e.getMessage());
        }
    }

    @PutMapping("/{messageId}")
    public ResponseEntity<?> updateMessage(@PathVariable String messageId, @RequestBody Message message) {
        try {
            Message updatedMessage = messageService.updateMessage(messageId, message);
            return ResponseEntity.ok(updatedMessage);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating message: " + e.getMessage());
        }
    }

    @DeleteMapping("/{messageId}")
    public ResponseEntity<?> deleteMessage(@PathVariable String messageId) {
        try {
            messageService.deleteMessage(messageId);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting message: " + e.getMessage());
        }
    }
}
