package duzhinsky.chess.api.coreDto;

import duzhinsky.chess.core.game.move.MovePart;

public record MovePartDto(FigureDto figureDto, PositionDto to) {

    public static MovePartDto fromMovePart(MovePart movePart) {
        return new MovePartDto(
            FigureDto.fromFigure(movePart.getFigure()),
            PositionDto.fromPosition(movePart.getTo())
        );
    }
}
