package duzhinsky.chess.data.game;

import duzhinsky.chess.data.game.figure.Figure;
import duzhinsky.chess.data.game.figure.Pawn;
import duzhinsky.chess.data.game.move.CompositeMove;
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

    public List<CompositeMove> getPossibleMoves() {
        return figures.values().stream().flatMap(figure -> figure.getPossibleMoves(this).stream()).toList();
    }

    public static final Board DEFAULT_BOARD = new Board(
        List.of(
            new Pawn(new Position(0, 1), Color.WHITE),
            new Pawn(new Position(1, 1), Color.WHITE),
            new Pawn(new Position(2, 1), Color.WHITE),
            new Pawn(new Position(3, 1), Color.WHITE),
            new Pawn(new Position(4, 1), Color.WHITE),
            new Pawn(new Position(5, 1), Color.WHITE),
            new Pawn(new Position(6, 1), Color.WHITE),
            new Pawn(new Position(7, 1), Color.WHITE)
        )
    );

}
