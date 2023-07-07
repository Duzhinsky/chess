package duzhinsky.chess.core.game.board;

import duzhinsky.chess.core.IllegalMoveException;
import duzhinsky.chess.core.game.Color;
import duzhinsky.chess.core.game.Position;
import duzhinsky.chess.core.game.figure.Figure;
import duzhinsky.chess.core.game.move.Move;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.PersistenceCreator;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
public class Board {

    private int iteration;

    private Color actingColor;

    private Map<Position, Figure> figures;

    Set<Move> possibleMoves;

    @PersistenceCreator
    public Board(int iteration, Color actingColor, Map<Position, Figure> figures, Set<Move> possibleMoves) {
        this.iteration = iteration;
        this.actingColor = actingColor;
        this.figures = figures;
        this.possibleMoves = possibleMoves;
    }

    public Board(int iteration, List<Figure> figures) {
        this(
            iteration,
            Color.WHITE,
            figures.stream().collect(Collectors.toMap(Figure::getPosition, Function.identity())),
                null
        );
        this.possibleMoves = calculatePossibleMoves(figures);
    }

    public Board(List<Figure> figures) {
        this(0, figures);
    }

    public Optional<Figure> getFigure(Position pos) {
        return Optional.ofNullable(figures.get(pos));
    }

    public List<Position> getUnderAttackPositions() {
        return figures.values().stream()
            .filter(figure -> figure.getColor() != actingColor)
            .flatMap(figure -> figure.calculatePossibleMoves(this).stream())
            .map(Move::getTo)
            .toList();
    }

    public void moveFigure(Figure figure, Position to) {
        figures.remove(figure.getPosition());
        figures.put(to, figure);
        figure.setPosition(to);
    }

    private Set<Move> calculatePossibleMoves(Collection<Figure> figures) {
        return figures.stream()
                .filter(figure -> figure.getColor() == actingColor)
                .flatMap(figure -> figure.calculatePossibleMoves(this).stream())
                .collect(Collectors.toSet());
    }

    public void applyMove(Move move) {
        if(!isMovePossible(move)) {
            throw new IllegalMoveException("The move is not allowed on the board");
        }
        move.apply(this);
        this.possibleMoves = calculatePossibleMoves(figures.values());
    }

    public boolean isMovePossible(Move move) {
        return possibleMoves.contains(move);
    }

    public static final Board DEFAULT_BOARD = new Board(
        List.of(
            Figure.pawn(new Position(0, 1), Color.WHITE),
            Figure.pawn(new Position(1, 1), Color.WHITE),
            Figure.pawn(new Position(2, 1), Color.WHITE),
            Figure.pawn(new Position(3, 1), Color.WHITE),
            Figure.pawn(new Position(4, 1), Color.WHITE),
            Figure.pawn(new Position(5, 1), Color.WHITE),
            Figure.pawn(new Position(6, 1), Color.WHITE),
            Figure.pawn(new Position(7, 1), Color.WHITE)
        )
    );

}
