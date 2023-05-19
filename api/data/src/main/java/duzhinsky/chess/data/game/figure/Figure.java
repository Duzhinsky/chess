package duzhinsky.chess.data.game.figure;

import duzhinsky.chess.data.game.Board;
import duzhinsky.chess.data.game.Color;
import duzhinsky.chess.data.game.Position;
import duzhinsky.chess.data.game.move.CompositeMove;
import duzhinsky.chess.data.game.move.MovePart;
import java.util.List;
import java.util.stream.Stream;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public abstract class Figure {

    private Position position;

    private Color color;

    private FigureType type;

    private int lastMoveIteration;

    private static int NOT_MOVED = -1;

    public Figure(FigureType type) {
        this.type = type;
    }

    public Figure(Position position, Color color, FigureType type) {
        this(position, color, type, NOT_MOVED);
    }

    public boolean isFirstMove() {
        return lastMoveIteration == NOT_MOVED;
    }

    public void makeMove(MovePart movePart, Board board) {
        movePart.getFigure().setPosition(movePart.getTo());
        movePart.getFigure().setLastMoveIteration(movePart.getIteration());
        board.getFigures().remove(movePart.getFigure().getPosition());
        board.getFigures().remove(movePart.getTo());
        board.getFigures().put(movePart.getTo(), movePart.getFigure());
    }

    public abstract List<CompositeMove> getPossibleMoves(Board board);

    protected Stream<Position> offsetsToNewPositions(List<Position> offsets, Board board) {
        return offsets.stream()
            .map(offset -> color.directedOffset(offset))
            .map(offset -> position.plus(offset))
            .filter(Position::isOnBoard)
            .filter(
                // Is not occupied by the same color figure
                newPos -> board.getFigure(newPos)
                    .filter(onBoardFigure -> color == onBoardFigure.getColor())
                    .isEmpty()
            );
    }
}
