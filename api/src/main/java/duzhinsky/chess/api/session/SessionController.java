package duzhinsky.chess.api.session;

import duzhinsky.chess.api.coreDto.CompositeMoveDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/session")
public class SessionController {

    private final SessionManager sessionManager;

    @PostMapping("/create")
    public SessionDto sessionDto(@RequestHeader("pid") String playerId) {
        return SessionDto.fromEntity(sessionManager.createSession(playerId));
    }

    @GetMapping("/{id}")
    public SessionDto getSession(@PathVariable("id") String sessionId) {
        return SessionDto.fromEntity(sessionManager.findSessionById(sessionId));
    }

    @PostMapping("/{id}/move")
    public SessionDto makeMove(
        @PathVariable("id") String sessionId,
        @RequestBody CompositeMoveDto moveDto,
        @RequestHeader("pid") String playerId
    ) {
        return SessionDto.fromEntity(sessionManager.makeMove(sessionId, playerId, moveDto));
    }

}
