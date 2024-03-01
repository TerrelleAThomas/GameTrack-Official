package edu.famu.gametrack.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BaseUserHistory {

    protected String _id;
    protected List<String> interactions;

}
