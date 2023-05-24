package duzhinsky.chess.api.session;

import duzhinsky.chess.api.coreDto.CompositeMoveDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
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
@Tag(name = "Session", description = "Игровые сессии")
public class SessionController {

    private final SessionManager sessionManager;

    @Operation(
        summary = "Сделать ход",
        description = "Применяет один из возможных ходов на доске"
    )
    @ApiResponse(
        responseCode = "200",
        content = @Content(
            mediaType = MediaType.APPLICATION_JSON_VALUE,
            schema = @Schema(implementation = SessionDto.class)
        )
    )
    @ApiResponse(responseCode = "400", description = "Нельзя сделать такой ход. См тело ответа", content = @Content())
    @ApiResponse(responseCode = "404", description = "Нет такой сессии", content = @Content())
    @PostMapping("/{id}/move")
    public SessionDto makeMove(
        @PathVariable("id") String sessionId,
        @RequestBody CompositeMoveDto moveDto,
        @RequestHeader("pid") String playerId
    ) {
        return SessionDto.fromEntity(sessionManager.makeMove(sessionId, playerId, moveDto));
    }

    @Operation(
        summary = "Создать новую игру с последующим поиском соперника",
        description = "Здесь временно нужно передавать id игрока в headers, "
            + "пока нет аутентификации. Потом туда пойдет токен"
    )
    @ApiResponse(
        responseCode = "200",
        description = "Почти во всех случаях. Ошибка может быть разве что из-за "
            + "не переданного заголовка",
        content = @Content(
            mediaType = MediaType.APPLICATION_JSON_VALUE,
            schema = @Schema(implementation = SessionDto.class)
        )
    )
    @PostMapping("/create")
    public SessionDto sessionDto(
        @Parameter(description = "Временный рандомный id игрока."
            + " Потом здесь будет заголовок с токеном")
        @RequestHeader("pid") String playerId
    ) {
        return SessionDto.fromEntity(sessionManager.createSession(playerId));
    }

    @Operation(
        summary = "Получить сессию",
        description = """
            Выдает актуальную версию сессии. Эта ручка будет использоваться для пуллинга, пока ожидается
            действие другого игрока. Еще можно использовать для обновления состояния, если игрок закрывал клиент
            """
    )
    @ApiResponse(
        responseCode = "200",
        content = @Content(
            mediaType = MediaType.APPLICATION_JSON_VALUE,
            schema = @Schema(implementation = SessionDto.class)
        )
    )
    @ApiResponse(responseCode = "404", description = "Нет такой сессии", content = @Content())
    @GetMapping("/{id}")
    public SessionDto getSession(@PathVariable("id") String sessionId) {
        return SessionDto.fromEntity(sessionManager.findSessionById(sessionId));
    }

}
