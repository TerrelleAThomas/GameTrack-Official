package edu.famu.gametrack.Model;

import com.google.cloud.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SystemActivityLog extends BaseSystemActivityLog {

    private String userId;

    public SystemActivityLog(String ActivityDescription, String LogId, Timestamp createdAt, String userId) {
        super(ActivityDescription, LogId, createdAt);
        this.userId = userId;
    }
}
