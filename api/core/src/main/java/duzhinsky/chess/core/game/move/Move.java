package duzhinsky.chess.core.game.move;

import duzhinsky.chess.core.game.Board;
import duzhinsky.chess.core.game.figure.Figure;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@EqualsAndHashCode
@ToString
@Getter
public abstract class Move {

    protected final MoveType type;

    protected final Figure figure;

    public Move(MoveType type, Figure figure) {
        this.type = type;
        this.figure = figure;
    }

    public abstract boolean isLegal(Board board);

    public abstract void apply(Board board);
}
