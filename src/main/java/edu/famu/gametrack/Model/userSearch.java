package edu.famu.gametrack.Model;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class userSearch extends BaseUsersearch {

    private String userId;
    private List<String> resultUserId; // List of string references (user IDs)

    public userSearch(String searchId, String userId, List<String> resultUserId) {
        super(searchId);
        this.userId = userId;
        this.resultUserId = resultUserId;
    }

    public void setResultUserIds(List<String> resultUserIds) {
    }

// Other methods and logic can go here
}
