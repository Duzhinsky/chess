package duzhinsky.chess.api;

import duzhinsky.chess.core.DataConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import(DataConfiguration.class)
public class WsApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(WsApiApplication.class, args);
    }
}
