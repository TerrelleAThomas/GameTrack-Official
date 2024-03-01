package edu.famu.gametrack.Model;

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

}
