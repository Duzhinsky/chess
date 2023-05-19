package duzhinsky.chess.api.coreDto;

import duzhinsky.chess.data.game.move.CompositeMove;
import java.util.List;

public record CompositeMoveDto(
    List<MovePartDto> moves
) {

    public static CompositeMoveDto fromCompositeMove(CompositeMove compositeMove) {
        return new CompositeMoveDto(
            compositeMove.getMoves().stream().map(MovePartDto::fromMovePart).toList()
        );
    }
}
