package duzhinsky.chess.core.game.figure;

import duzhinsky.chess.core.game.Position;
import duzhinsky.chess.core.game.board.Board;
import duzhinsky.chess.core.game.move.*;

import java.util.List;
import java.util.UUID;
import java.util.stream.Stream;

public class PawnProcessor extends FigureProcessor {

    private final static List<Position> moveOffsets = List.of(
            new Position(0, 1)
    );

    private final static List<Position> firstMoveOffsets = List.of(
            new Position(0, 1),
            new Position(0, 2)
    );

    private final static List<Position> takingOffsets = List.of(
            new Position(1, 1),
            new Position(-1, 1)
    );

    private final static List<Position> enPassantOffsets = List.of(
            new Position(-1, 0),
            new Position(1, 0)
    );

    @Override
    public List<Move> getPossibleMoves(Figure figure, Board board) {
        var possibleSteps = figure.isFirstMove() ? firstMoveOffsets : moveOffsets;
        Stream<StepMove> stepMoves = offsetsToNewPositions(figure, board, possibleSteps)
                .map(pos -> new StepMove(UUID.randomUUID().toString(), figure, pos))
                .filter(move -> move.isLegal(board));

        Stream<TakingMove> takingMoves = offsetsToNewPositions(figure, board, takingOffsets)
                .flatMap(pos -> board.getFigure(pos).stream())
                .map(taken -> new TakingMove(UUID.randomUUID().toString(), figure, taken))
                .filter(move -> move.isLegal(board));

        Stream<EnPassantMove> enPassantMoves = offsetsToNewPositions(figure, board, enPassantOffsets)
                .flatMap(newPos -> board.getFigure(newPos).stream())
                .map(taken -> new EnPassantMove(UUID.randomUUID().toString(), figure, taken))
                .filter(move -> move.isLegal(board));

        Stream<Move> filteredMoves = Stream.concat(stepMoves, Stream.concat(takingMoves, enPassantMoves))
                .flatMap(m -> {
                    if (!isNotLast(figure, m.getTo())) {
                        return Stream.of(
                                new TurningMove(UUID.randomUUID().toString(), m, FigureType.ROOK),
                                new TurningMove(UUID.randomUUID().toString(), m, FigureType.BISHOP),
                                new TurningMove(UUID.randomUUID().toString(), m, FigureType.KNIGHT),
                                new TurningMove(UUID.randomUUID().toString(), m, FigureType.QUEEN)
                        );
                    } else return Stream.of(m);
                });

        return filteredMoves.toList();
    }

    private boolean isNotLast(Figure figure, Position position) {
        return figure.getColor().getOpponentHorizontal() != position.getY();
    }
}
