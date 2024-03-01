package edu.famu.gametrack.Model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
public class Friendship extends BaseFriendship {
    private String user1;
    private String user2;

    public Friendship(String friendshipId, String status, String user1, String user2) {
        super(friendshipId, status);
        this.user1 = user1;
        this.user2 = user2;
    }
}
