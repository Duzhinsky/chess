package duzhinsky.chess.api.session;

import duzhinsky.chess.core.game.Board;
import duzhinsky.chess.core.game.Color;
import duzhinsky.chess.core.session.Session;
import duzhinsky.chess.core.session.SessionRepository;
import duzhinsky.chess.core.session.SessionStatus;
import java.util.Map;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor
public class SessionManager {

    private final SessionRepository sessionRepository;

    public Session createSession(String playerId) {
        var newSession = Session.builder()
            .id(UUID.randomUUID().toString())
            .board(Board.DEFAULT_BOARD)
            .actingColor(Color.WHITE)
            .players(Map.of(Color.WHITE, playerId))
            .sessionStatus(SessionStatus.CREATED)
            .build();
        sessionRepository.save(newSession);
        return newSession;
    }

    public Session findSessionById(String id) {
        return sessionRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND)
        );
    }
}
