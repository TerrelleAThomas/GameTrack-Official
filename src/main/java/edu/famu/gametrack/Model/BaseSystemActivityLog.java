package edu.famu.gametrack.Model;

import com.google.cloud.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BaseSystemActivityLog {

    protected String ActivityDescription;
    protected @Nullable String LogId;
    protected @Nullable Timestamp createdAt;
}
