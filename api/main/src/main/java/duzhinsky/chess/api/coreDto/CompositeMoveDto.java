package duzhinsky.chess.api.coreDto;

import duzhinsky.chess.core.game.move.CompositeMove;
import jakarta.validation.constraints.NotEmpty;
import java.util.List;

public record CompositeMoveDto(

    @NotEmpty
    List<MovePartDto> moves
) {

    public static CompositeMoveDto fromCompositeMove(CompositeMove compositeMove) {
        return new CompositeMoveDto(
            compositeMove.getMoves().stream().map(MovePartDto::fromMovePart).toList()
        );
    }
}
