package duzhinsky.chess.keycloak;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.liquibase.LiquibaseAutoConfiguration;

@SpringBootApplication(exclude = LiquibaseAutoConfiguration.class)
public class KeycloakMain {

    public static void main(String[] args) {
        SpringApplication.run(KeycloakMain.class, args);
    }
}