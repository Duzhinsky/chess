package duzhinsky.chess.core.game;

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

    private Map<Position, Figure> figures;

    public Board(int iteration, List<Figure> figures) {
        this(
            iteration,
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
            .flatMap(figure -> figure.getPossibleMoves(this).stream())
            .toList();
    }

    public void moveFigure(Figure figure, Position to) {
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
