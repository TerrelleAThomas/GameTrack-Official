package edu.famu.gametrack.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserHistory extends BaseUserHistory {
    private String userId;

    public UserHistory(String _id, List<String> interactions, String userId) {
        super(_id, interactions);
        this.userId = userId;
    }
}
