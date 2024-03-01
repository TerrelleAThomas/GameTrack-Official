package edu.famu.gametrack.Model;

import com.google.cloud.Timestamp;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
public class DirectMessage extends BaseDirectMessage {
    private String receiverId;
    private String senderId;

    public DirectMessage(String messageId, Timestamp CreatedAt, String content, String receiverId, String senderId) {
        super(messageId, CreatedAt, content);
        this.receiverId = receiverId;
        this.senderId = senderId;
    }
}
