package duzhinsky.chess.api.coreDto;

import duzhinsky.chess.data.game.Board;
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
