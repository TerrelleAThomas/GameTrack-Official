package edu.famu.gametrack.Model;

import com.google.cloud.Timestamp;
import com.google.cloud.firestore.annotation.DocumentId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class Report {
    @DocumentId

    protected @Nullable String ReportId;
    protected String Description;
    protected String Informational;
    protected String Type;
    private Timestamp startDate; // The start date of the reporting period
    private Timestamp endDate; // The end date of the reporting period
    private int totalPlays; // Total number of plays within the time period
    private int totalPosts;

    public void setType(String type) {
    }
}
