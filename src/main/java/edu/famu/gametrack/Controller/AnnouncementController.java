package edu.famu.gametrack.Controller;

import edu.famu.gametrack.Model.Announcement;
import edu.famu.gametrack.Services.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/announcements")
public class AnnouncementController {

    @Autowired
    private AnnouncementService announcementService;

    @PostMapping
    public ResponseEntity<?> createAnnouncement(@RequestBody Announcement announcement) {
        try {
            Announcement createdAnnouncement = announcementService.createAnnouncement(announcement);
            return ResponseEntity.ok(createdAnnouncement);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating announcement: " + e.getMessage());
        }
    }

    @GetMapping("/{announcementId}")
    public ResponseEntity<?> getAnnouncementById(@PathVariable String announcementId) {
        try {
            Announcement announcement = announcementService.getAnnouncementById(announcementId);
            if (announcement != null) {
                return ResponseEntity.ok(announcement);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving announcement: " + e.getMessage());
        }
    }

    @PutMapping("/{announcementId}")
    public ResponseEntity<?> updateAnnouncement(@PathVariable String announcementId, @RequestBody Announcement announcement) {
        try {
            Announcement updatedAnnouncement = announcementService.updateAnnouncement(announcementId, announcement);
            return ResponseEntity.ok(updatedAnnouncement);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating announcement: " + e.getMessage());
        }
    }

    @DeleteMapping("/{announcementId}")
    public ResponseEntity<?> deleteAnnouncement(@PathVariable String announcementId) {
        try {
            announcementService.deleteAnnouncement(announcementId);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting announcement: " + e.getMessage());
        }
    }
}

