package duzhinsky.chess.core.game.board;

import duzhinsky.chess.core.game.Color;
import duzhinsky.chess.core.game.Position;
import duzhinsky.chess.core.game.figure.Figure;
import duzhinsky.chess.core.game.move.Move;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Board {

    private int iteration;

    private Color actingColor;

    private Map<Position, Figure> figures;


    public Board(int iteration, List<Figure> figures) {
        this(
            iteration,
            Color.WHITE,
            figures.stream().collect(Collectors.toMap(Figure::getPosition, Function.identity()))
        );
    }

    protected Board(List<Figure> figures) {
        this(0, figures);
    }

    public Optional<Figure> getFigure(Position pos) {
        return Optional.ofNullable(figures.get(pos));
    }

    public List<Move> getPossibleMoves() {
        return figures.values().stream()
            .filter(figure -> figure.getColor() == actingColor)
            .flatMap(figure -> figure.getPossibleMoves(this).stream())
            .toList();
    }

    public List<Position> getUnderAttackPositions() {
        return figures.values().stream()
            .filter(figure -> figure.getColor() != actingColor)
            .flatMap(figure -> figure.getPossibleMoves(this).stream())
            .map(Move::getTo)
            .toList();
    }

    public void moveFigure(Figure figure, Position to) {
        figures.remove(figure.getPosition());
        figures.put(to, figure);
        figure.setPosition(to);
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
