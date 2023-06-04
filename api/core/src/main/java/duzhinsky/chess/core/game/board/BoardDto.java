package duzhinsky.chess.core.game.board;

import duzhinsky.chess.core.game.figure.FigureDto;
import java.util.List;

public record BoardDto(
    List<FigureDto> figures
) {

    public static BoardDto fromBoard(Board board) {
        return new BoardDto(
            board.getFigures().values().stream()
                .map(FigureDto::fromFigure)
                .toList()
        );
    }
}
