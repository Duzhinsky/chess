package duzhinsky.chess.core.session;

import duzhinsky.chess.core.game.Board;
import duzhinsky.chess.core.game.Color;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("sessions")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Session {

    @Id
    private String id = "";

    private Board board = Board.DEFAULT_BOARD;

    private Map<Color, String> players = Map.of();

    private Color actingColor = Color.WHITE;

    private SessionStatus sessionStatus = SessionStatus.CREATED;
}
