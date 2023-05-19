package duzhinsky.chess.api;

import duzhinsky.chess.data.DataConfiguration;
import duzhinsky.chess.data.session.SessionRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import(DataConfiguration.class)
public class ApiApplication {

    private final SessionRepository sessionRepository;

    public ApiApplication(SessionRepository sessionRepository) {
        this.sessionRepository = sessionRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(ApiApplication.class, args);
    }
}
