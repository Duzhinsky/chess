package duzhinsky.chess.api.session;

import duzhinsky.chess.api.coreDto.BoardDto;
import duzhinsky.chess.core.game.move.Move;
import duzhinsky.chess.core.session.Session;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;

public record SessionDto (

    @Schema(example = "e6044780-1084-439b-b2d3-b531c5d429d5")
    String id,

    BoardDto board,

    List<Move> possibleMoves
) {

    public static SessionDto fromEntity(Session sessionEntity) {
        return new SessionDto(
            sessionEntity.getId(),
            BoardDto.fromBoard(sessionEntity.getBoard()),
            sessionEntity.getBoard().getPossibleMoves()
        );
    }
}
