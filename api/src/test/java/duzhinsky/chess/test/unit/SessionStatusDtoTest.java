package duzhinsky.chess.test.unit;

import duzhinsky.chess.api.coreDto.SessionStatusDto;
import duzhinsky.chess.data.game.Color;
import duzhinsky.chess.data.session.Session;
import duzhinsky.chess.data.session.SessionStatus;
import java.util.Map;
import org.junit.jupiter.api.Test;

public class SessionStatusDtoTest {

    @Test
    public void allStatusesAreMapped() {
        Session session = Session.builder()
            .players(Map.of(Color.WHITE, "playerId1", Color.BLACK, "playerId2"))
            .actingColor(Color.WHITE)
            .build();

        for (var status : SessionStatus.values()) {
            session.setSessionStatus(status);
            SessionStatusDto.fromSession(session, "playerId1");
            SessionStatusDto.fromSession(session, "playerId2");
        }
    }
}
