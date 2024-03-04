package edu.famu.gametrack.Services;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class userSearchService {

    public List<Object> searchForUsers(String query) throws ExecutionException, InterruptedException {
        Firestore db = FirestoreClient.getFirestore();
        ApiFuture<QuerySnapshot> future = db.collection("User")
                .orderBy("name")
                .startAt(query)
                .endAt(query + "\uf8ff")
                .get();

        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        List<Object> users = new ArrayList<>();
        for (QueryDocumentSnapshot document : documents) {
            users.add(document.getData());
        }
        return users;
    }
}
