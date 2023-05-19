package duzhinsky.chess.api.coreDto;

import duzhinsky.chess.data.game.Color;
import duzhinsky.chess.data.game.Position;
import duzhinsky.chess.data.game.figure.Figure;
import duzhinsky.chess.data.game.figure.FigureType;

public record FigureDto(
    FigureType type,
    Position position,
    Color color
) {

    public static FigureDto fromFigure(Figure figure) {
        return new FigureDto(figure.getType(), figure.getPosition(), figure.getColor());
    }
}
