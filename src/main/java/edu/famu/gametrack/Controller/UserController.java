package edu.famu.gametrack.Controller;

import edu.famu.gametrack.Model.User;
import edu.famu.gametrack.Services.UserService;
import edu.famu.gametrack.Utli.ErrorMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/create")
    public ResponseEntity<?> createUser(@RequestBody Map<String, String> userData) {
        try {
            User newUser = new User();
            newUser.setEmail(userData.get("email")); // Using email as the primary identifier
            newUser.setPassword(userData.get("password"));
            // Populate other fields as needed

            String userId = userService.createUser(newUser);

            return ResponseEntity.ok().body("User created successfully with ID: " + userId);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            logger.error("Error creating user", e);
            return ResponseEntity.internalServerError().body("Error creating user: " + e.getMessage());
        }
    }
    @GetMapping("/search")
    public ResponseEntity<?> getUserByUsernameOrEmail(@RequestParam(name = "username", required = false) String username,
                                                      @RequestParam(name = "email", required = false) String email) {
        try {
            User user = (username != null) ? userService.getUserByUsername(username) : userService.getUserByEmail(email);
            return (user != null) ? ResponseEntity.ok(user) : ResponseEntity.notFound().build();
        } catch (Exception e) {
            logger.error("Error fetching user", e);
            return ResponseEntity.internalServerError().body(new ErrorMessage("Cannot fetch user", "UserService", e.getMessage()));
        }
    }

    @PutMapping("/{username}")
    public ResponseEntity<?> updateUser(@PathVariable("username") String username, @RequestBody Map<String, Object> updateValues) {
        try {
            userService.updateUserByUsername(username, updateValues);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            logger.error("Error updating user", e);
            return ResponseEntity.internalServerError().body("Error updating user");
        }
    }

    @DeleteMapping("/{username}")
    public ResponseEntity<?> deleteUser(@PathVariable("username") String username) {
        try {
            if (!userService.deleteUserByUsername(username)) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Access denied or user not found");
            }
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            logger.error("Error deleting user", e);
            return ResponseEntity.internalServerError().body("Error deleting user");
        }
    }

    // Method to activate a user
    @PostMapping("/{username}/activate")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> activateUser(@PathVariable("username") String username) {
        try {
            boolean activated = userService.activateUserByUsername(username);
            if (!activated) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
            return ResponseEntity.ok("User activated successfully");
        } catch (Exception e) {
            logger.error("Error activating user", e);
            return ResponseEntity.internalServerError().body("Error activating user");
        }
    }

    // Method to deactivate a user
    @PostMapping("/{username}/deactivate")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deactivateUser(@PathVariable("username") String username) {
        try {
            boolean deactivated = UserService.deactivateUserByUsername(username);
            if (!deactivated) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
            return ResponseEntity.ok("User deactivated successfully");
        } catch (Exception e) {
            logger.error("Error deactivating user", e);
            return ResponseEntity.internalServerError().body("Error deactivating user");
        }
    }
}
