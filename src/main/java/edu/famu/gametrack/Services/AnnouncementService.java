package edu.famu.gametrack.Services;


import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import edu.famu.gametrack.Model.Announcement;
import org.springframework.stereotype.Service;

@Service
public class AnnouncementService {

    private final Firestore db;

    public AnnouncementService(Firestore db) {
        this.db = db;
    }

    public Announcement createAnnouncement(Announcement announcement) throws Exception {
        String docId = announcement.getAnnouncementId() != null ? announcement.getAnnouncementId() : db.collection("announcements").document().getId();
        announcement.setAnnouncementId(docId);
        db.collection("announcements").document(docId).set(announcement).get();
        return announcement;
    }

    public Announcement getAnnouncementById(String announcementId) throws Exception {
        DocumentSnapshot documentSnapshot = db.collection("announcements").document(announcementId).get().get();
        if (documentSnapshot.exists()) {
            return documentSnapshot.toObject(Announcement.class);
        } else {
            throw new Exception("Announcement not found");
        }
    }

    public Announcement updateAnnouncement(String announcementId, Announcement announcement) throws Exception {
        db.collection("announcements").document(announcementId).set(announcement).get();
        return announcement;
    }

    public void deleteAnnouncement(String announcementId) throws Exception {
        db.collection("announcements").document(announcementId).delete().get();
    }
}
