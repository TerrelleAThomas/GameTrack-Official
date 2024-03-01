package edu.famu.gametrack.Utli;

import com.google.firebase.database.annotations.Nullable;
import lombok.Data;

@Data
public class RegistrationRequest {
    private String email;
    private String password;
    private @Nullable String displayName;
}