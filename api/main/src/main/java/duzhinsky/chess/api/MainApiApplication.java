package duzhinsky.chess.api;

import duzhinsky.chess.core.DataConfiguration;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@OpenAPIDefinition(
    servers = {
        @Server(url = "/api"),
        @Server(url = "/")
    }
)
@SpringBootApplication
@Import(DataConfiguration.class)
public class MainApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(MainApiApplication.class, args);
    }
}
