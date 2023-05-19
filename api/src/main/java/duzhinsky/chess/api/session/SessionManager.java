package duzhinsky.chess.api.session;

import duzhinsky.chess.api.coreDto.CompositeMoveDto;
import duzhinsky.chess.core.BoardManager;
import duzhinsky.chess.core.IllegalMoveException;
import duzhinsky.chess.data.game.Board;
import duzhinsky.chess.data.game.Color;
import duzhinsky.chess.data.game.move.CompositeMove;
import duzhinsky.chess.data.session.Session;
import duzhinsky.chess.data.session.SessionRepository;
import duzhinsky.chess.data.session.SessionStatus;
import java.util.Map;
import java.util.UUID;
import java.util.function.Predicate;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor
public class SessionManager {

    private final SessionRepository sessionRepository;

    private final BoardManager boardManager = new BoardManager();

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

    public Session makeMove(String sessionId, String playerId, CompositeMoveDto move) {
        Session currentSession = findSessionById(sessionId);

        Predicate<CompositeMove> isRequestedMove = (persistedMove) -> persistedMove.getMoves().stream()
            .anyMatch(
                persistedPart -> move.moves().stream()
                    .allMatch(movePart ->
                        movePart.figureDto().type() == persistedPart.getFigure().getType()
                        && movePart.figureDto().color() == persistedPart.getFigure().getColor()
                        && movePart.to() == persistedPart.getTo()
                    )
            );

        CompositeMove persistedMove = currentSession.getBoard().getPossibleMoves().stream()
            .filter(isRequestedMove)
            .findAny()
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST));

        try {
            boardManager.makeMove(currentSession.getBoard(), persistedMove);
            sessionRepository.save(currentSession);
            return currentSession;
        } catch (IllegalMoveException moveException) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            // todo add sentry report
        }
    }
}
