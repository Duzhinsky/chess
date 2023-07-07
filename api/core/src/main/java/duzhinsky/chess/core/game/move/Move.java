package duzhinsky.chess.core.game.move;

import duzhinsky.chess.core.game.Position;
import duzhinsky.chess.core.game.board.Board;
import duzhinsky.chess.core.game.figure.Figure;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@EqualsAndHashCode
@ToString
@Getter
public abstract class Move {

    private final String id;

    protected final MoveType type;

    protected final Figure figure;

    protected final Position to;

    public Move(String id, MoveType type, Figure figure, Position to) {
        this.id = id;
        this.type = type;
        this.figure = figure;
        this.to = to;
    }

    public abstract boolean isLegal(Board board);

    public abstract void apply(Board board);
}
