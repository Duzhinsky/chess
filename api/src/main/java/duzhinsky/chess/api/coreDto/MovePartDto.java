package duzhinsky.chess.api.coreDto;

import duzhinsky.chess.data.game.Position;
import duzhinsky.chess.data.game.move.MovePart;

public record MovePartDto(FigureDto figureDto, Position to) {

    public static MovePartDto fromMovePart(MovePart movePart) {
        return new MovePartDto(FigureDto.fromFigure(movePart.getFigure()), movePart.getTo());
    }
}
