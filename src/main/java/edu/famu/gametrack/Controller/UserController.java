package edu.famu.gametrackcode.Controller;

import edu.famu.gametrackcode.Model.User;
import edu.famu.gametrackcode.Services.UserService;
import edu.famu.gametrackcode.Services.userSearchService;
import edu.famu.gametrackcode.Utli.ErrorMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    private edu.famu.gametrackcode.Services.userSearchService userSearchService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // Simplified to just get user by username or email
    @GetMapping("/search")
    public ResponseEntity<?> getUserByUsernameOrEmail(@RequestParam(name = "username", required = false) String username,
                                                      @RequestParam(name = "email", required = false) String email) {
        try {
            if (username != null) {
                User userByUsername = userService.getUserByUsername(username);
                if (userByUsername != null) {
                    return ResponseEntity.ok(userByUsername);
                }
            } else if (email != null) {
                User userByEmail = userService.getUserByEmail(email);
                if (userByEmail != null) {
                    return ResponseEntity.ok(userByEmail);
                }
            }
            return ResponseEntity.notFound().build();
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
            userService.deleteUserByUsername(username);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            logger.error("Error deleting user", e);
            return ResponseEntity.internalServerError().body("Error deleting user");
        }
    }

    // Endpoint to update user status
    @PutMapping("/updateStatus/{userId}")
    public ResponseEntity<?> updateUserStatus(@PathVariable String userId, @RequestBody String status) {
        try {
            userSearchService.updateUserStatus(userId, status);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // Endpoint to delete a user

}
