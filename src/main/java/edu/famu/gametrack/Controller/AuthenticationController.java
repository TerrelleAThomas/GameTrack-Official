package edu.famu.gametrack.Controller;

// ... other imports ...

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.ListUsersPage;
import com.google.firebase.auth.UserRecord;
import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import edu.famu.gametrack.Services.UserService;

import java.util.*;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "localhost:3000")
public class AuthenticationController {
    private final FirebaseAuth firebaseAuth;
    private final UserService usersService;
    private final Log logger = LogFactory.getLog(this.getClass());

    public AuthenticationController(FirebaseAuth firebaseAuth, UserService userService) {
        this.firebaseAuth = firebaseAuth;
        this.usersService = userService;
    }

    // ... existing /register and /login endpoints ...

    @PutMapping("/account/{email}")
    public ResponseEntity<Boolean> accountSwitchActive(@PathVariable String email,
                                                       @RequestParam(name = "set", defaultValue = "true") boolean set) {
        try {
            // Toggle disable user in auth
            UserRecord userRecord = firebaseAuth.getUserByEmail(email);
            UserRecord.UpdateRequest update = new UserRecord.UpdateRequest(userRecord.getUid())
                    .setDisabled(!set);
            firebaseAuth.updateUser(update);

            // Update Users document field isActive
            String uid = usersService.getUserByEmail(email).get_Id();
            Map<String, Object> updates = new HashMap<>();
            updates.put("isActive", set);
            usersService.updateUser(uid, updates);

            return ResponseEntity.ok(set);
        } catch (FirebaseAuthException | ExecutionException | InterruptedException e) {
            logger.error("Failed to switch account active state", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/account/users")
    public ResponseEntity<Map<String, Object>> getAuthUsers() {
        Map<String, Object> returnVal = new HashMap<>();
        try {
            // This may need pagination in a real-world application
            ListUsersPage page = firebaseAuth.listUsers(null);
            List<UserRecord> userRecords = new ArrayList<>();
            page.iterateAll().forEach(userRecords::add);
            returnVal.put("users", userRecords);
            return ResponseEntity.ok(returnVal);
        } catch (FirebaseAuthException e) {
            logger.error("Failed to get users", e);
            returnVal.put("error", Arrays.toString(e.getStackTrace()));
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(returnVal);
        }
    }

    @PutMapping("/account/update/{uid}")
    public ResponseEntity<Map<String, Object>> updateUser(@PathVariable String uid, @RequestBody Map<String, Object> obj) {
        try {
            UserRecord.UpdateRequest updateRequest = new UserRecord.UpdateRequest(uid);
            if (obj.containsKey("photoUrl")) {
                updateRequest.setPhotoUrl((String) obj.get("photoUrl"));
            }
            // Add other fields to update as necessary

            UserRecord userRecord = firebaseAuth.updateUser(updateRequest);
            Map<String, Object> returnVal = new HashMap<>();
            returnVal.put("user", userRecord);
            return ResponseEntity.ok(returnVal);
        } catch (FirebaseAuthException e) {
            logger.error("Failed to update user", e);
            Map<String, Object> returnVal = new HashMap<>();
            returnVal.put("error", Arrays.toString(e.getStackTrace()));
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(returnVal);
        }
    }

    // ... additional endpoints and methods ...
}
