package duzhinsky.chess.api.coreDto;

import duzhinsky.chess.core.game.Color;
import duzhinsky.chess.core.game.figure.Figure;
import duzhinsky.chess.core.game.figure.FigureType;

public record FigureDto(

    FigureType type,

    PositionDto position,

    Color color
) {

    public static FigureDto fromFigure(Figure figure) {
        return new FigureDto(figure.getType(), PositionDto.fromPosition(figure.getPosition()), figure.getColor());
    }
}
