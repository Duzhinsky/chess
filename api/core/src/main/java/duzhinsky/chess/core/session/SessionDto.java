package duzhinsky.chess.core.session;

import duzhinsky.chess.core.game.board.BoardDto;
import duzhinsky.chess.core.game.move.MoveDto;

import java.util.List;

public record SessionDto (

    String id,

    BoardDto board,

    List<MoveDto> possibleMoves
) {

    public static SessionDto fromEntity(Session sessionEntity) {
        return new SessionDto(
            sessionEntity.getId(),
            BoardDto.fromBoard(sessionEntity.getBoard()),
            sessionEntity.getBoard().getPossibleMoves()
                    .stream()
                    .map(MoveDto::fromMove).toList()
        );
    }
}
