package edu.famu.gametrack.Services;

import com.google.api.core.ApiFuture;
import com.google.cloud.Timestamp;
import com.google.cloud.firestore.*;
import edu.famu.gametrack.Model.Report;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class ReportService {
    private final Firestore db;

    @Autowired
    public ReportService(Firestore db) {
        this.db = db;
    }

    public Report generateReport(String description, String type, Date startDate, Date endDate) throws ExecutionException, InterruptedException {
        // Create a new report object
        Report report = new Report();
        // Set fields
        report.setDescription(description);
        report.setType(type);
        report.setStartDate(Timestamp.of(startDate));
        report.setEndDate(Timestamp.of(endDate));
        report.setTotalPlays(fetchTotalPlays(startDate, endDate));
        report.setTotalPosts(fetchTotalPosts(startDate, endDate));

        // Generate a new ID for the report and save it to Firestore
        DocumentReference newReportRef = db.collection("reports").document();
        report.setReportId(newReportRef.getId());
        newReportRef.set(report).get();

        return report;
    }

    private int fetchTotalPlays(Date startDate, Date endDate) throws ExecutionException, InterruptedException {
        // Query Firestore for the total number of game plays between startDate and endDate
        ApiFuture<QuerySnapshot> future = db.collection("gameplays")
                .whereGreaterThanOrEqualTo("dateField", startDate)
                .whereLessThanOrEqualTo("dateField", endDate)
                .get();

        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        return documents.size(); // The size of documents list is the total plays count
    }

    private int fetchTotalPosts(Date startDate, Date endDate) throws ExecutionException, InterruptedException {
        // Query Firestore for the total number of posts between startDate and endDate
        ApiFuture<QuerySnapshot> future = db.collection("Post")
                .whereGreaterThanOrEqualTo("dateField", startDate)
                .whereLessThanOrEqualTo("dateField", endDate)
                .get();

        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        return documents.size(); // The size of documents list is the total posts count
    }
}

