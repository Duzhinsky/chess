package duzhinsky.chess.core.game.figure;

import duzhinsky.chess.core.game.Board;
import duzhinsky.chess.core.game.Color;
import duzhinsky.chess.core.game.Position;
import duzhinsky.chess.core.game.move.CompositeMove;
import duzhinsky.chess.core.game.move.MovePart;
import java.util.List;
import java.util.stream.Stream;

public class Pawn extends Figure {

    public Pawn() { super(FigureType.PAWN); }

    public Pawn(Position position, Color color) {
        super(position, color, FigureType.PAWN);
    }

    private final static List<Position> moveOffsets = List.of(
        new Position(0, 1)
    );

    private final static List<Position> firstMoveOffsets = List.of(
        new Position(0, 1),
        new Position(0, 2)
    );

    private final static List<Position> attackOffsets = List.of(
        new Position(1, 1),
        new Position(-1, 1)
    );

    private final static List<Position> enPassantOffsets = List.of(
        new Position(-1, 0),
        new Position(1, 0)
    );

    @Override
    public List<CompositeMove> getPossibleMoves(Board board) {
        var possibleSteps = isFirstMove() ? firstMoveOffsets : moveOffsets;
        Stream<Position> stepMoves = offsetsToNewPositions(possibleSteps, board);

        Stream<Position> attackMoves = offsetsToNewPositions(attackOffsets, board)
            .filter(newPos ->
                board.getFigure(newPos)
                    .filter(onBoardFigure -> onBoardFigure.getColor() != this.getColor())
                    .isPresent()
            );

        Stream<Position> enPassantMoves = offsetsToNewPositions(enPassantOffsets, board)
            .filter(newPos -> isEnPassantPosition(newPos, board));

        return Stream.concat(stepMoves, Stream.concat(attackMoves, enPassantMoves))
            .map(newPos -> new CompositeMove(
                    List.of(new MovePart(this, newPos, board.getIteration()))
                )
            ).toList();
    }

    private boolean isEnPassantPosition(Position newPosition, Board board) {
        return board.getFigure(newPosition)
            .filter(figure -> figure.getType() == FigureType.PAWN)
            .filter(pawn -> pawn.getLastMoveIteration() == board.getIteration() - 1)
            .isPresent();
    }
}
