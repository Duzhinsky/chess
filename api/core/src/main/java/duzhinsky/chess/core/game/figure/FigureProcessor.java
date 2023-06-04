package duzhinsky.chess.core.game.figure;

import duzhinsky.chess.core.game.Position;
import duzhinsky.chess.core.game.board.Board;
import duzhinsky.chess.core.game.move.Move;
import java.util.List;
import java.util.stream.Stream;

public abstract class FigureProcessor {

    public abstract List<Move> getPossibleMoves(Figure figure, Board board);

    protected Stream<Position> offsetsToNewPositions(Figure figure, Board board, List<Position> offsets) {
        return offsets.stream()
            .map(offset -> figure.getColor().directedOffset(offset))
            .map(offset -> figure.getPosition().plus(offset))
            .filter(Position::isOnBoard)
            .filter(
                // Is not occupied by the same color figure
                newPos -> board.getFigure(newPos)
                    .filter(onBoardFigure -> figure.getColor() == onBoardFigure.getColor())
                    .isEmpty()
            );
    }
}
