package edu.famu.gametrack.Model;

import com.google.cloud.Timestamp;
import com.google.cloud.firestore.annotation.DocumentId;

public class Post extends BasePost {
    private String gameId;
    private String userId;

    public Post(String PostId, Timestamp DeleteDate, String Title, Timestamp UpdateDate, String content, Timestamp creationDate, String gameId, String userId) {
        super(PostId, DeleteDate, Title, UpdateDate, content, creationDate);
        this.gameId = gameId;
        this.userId = userId;
    }

    // Additional methods like toString(), equals(), and hashCode() if necessary
}

