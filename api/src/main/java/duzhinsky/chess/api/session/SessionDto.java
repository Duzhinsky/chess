package duzhinsky.chess.api.session;

import duzhinsky.chess.api.coreDto.BoardDto;
import duzhinsky.chess.api.coreDto.CompositeMoveDto;
import duzhinsky.chess.data.session.Session;
import java.util.List;

public record SessionDto (
    String id,
    BoardDto board,
    List<CompositeMoveDto> possibleMoves
) {

    public static SessionDto fromEntity(Session sessionEntity) {
        return new SessionDto(
            sessionEntity.getId(),
            BoardDto.fromBoard(sessionEntity.getBoard()),
            sessionEntity.getBoard().getPossibleMoves().stream()
                .map(CompositeMoveDto::fromCompositeMove)
                .toList()
        );
    }
}
