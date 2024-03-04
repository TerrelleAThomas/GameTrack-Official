package edu.famu.gametrack.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import edu.famu.gametrack.Services.UserService;

 public class AdminController{
     @PostMapping("/activate/{username}")
     @PreAuthorize("hasAuthority('ROLE_ADMIN')")
     public ResponseEntity<?> activateUser(@PathVariable String username) {
         try {
             boolean success = UserService.deactivateUserByUsername(username);
             if (success) {
                 return ResponseEntity.ok().body("User activated successfully");
             } else {
                 return ResponseEntity.badRequest().body("User not found");
             }
         } catch (Exception e) {
             return ResponseEntity.internalServerError().body("An error occurred");
         }
     }

     // Deactivate a user
     @PostMapping("/deactivate/{username}")
     @PreAuthorize("hasAuthority('ROLE_ADMIN')")
     public ResponseEntity<?> deactivateUser(@PathVariable String username) {
         try {
             boolean success = UserService.deactivateUserByUsername(username);
             if (success) {
                 return ResponseEntity.ok().body("User deactivated successfully");
             } else {
                 return ResponseEntity.badRequest().body("User not found");
             }
         } catch (Exception e) {
             return ResponseEntity.internalServerError().body("An error occurred");
         }
     }

 }
