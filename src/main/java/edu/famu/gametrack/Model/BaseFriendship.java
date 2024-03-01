package edu.famu.gametrack.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BaseFriendship {
    protected @Nullable String friendshipId;
    protected String status;
}
