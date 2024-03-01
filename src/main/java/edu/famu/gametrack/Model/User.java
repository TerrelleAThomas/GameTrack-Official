package edu.famu.gametrack.Model;

import com.google.cloud.firestore.annotation.DocumentId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.google.cloud.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @DocumentId
    private String _Id;
    private Timestamp createdAt;
    private String email;
    private String gameConsole;
    private boolean isActive;
    private boolean isAdmin;
    private boolean isSiteAdmin;
    private String password;
    private String username;
}
