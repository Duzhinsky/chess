package duzhinsky.chess.core.game.figure;

import duzhinsky.chess.core.game.Color;
import duzhinsky.chess.core.game.PositionDto;
import duzhinsky.chess.core.game.board.Board;

public record FigureDto(

    FigureType type,

    PositionDto position,

    Color color
) {

    public static FigureDto fromFigure(Figure figure) {
        return new FigureDto(figure.getType(), PositionDto.fromPosition(figure.getPosition()), figure.getColor());
    }

    public Figure toFigure(Board board) {
        var figure = board.getFigure(position.toPosition())
            .orElseThrow(RuntimeException::new); // todo think about except
        if (figure.getType() != type || figure.getColor() != color) {
            throw new RuntimeException();
        }
        return figure;
    }
}
