package duzhinsky.chess.core.game.move;

import duzhinsky.chess.core.IllegalMoveException;
import duzhinsky.chess.core.game.Board;
import duzhinsky.chess.core.game.Position;
import duzhinsky.chess.core.game.figure.Figure;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@EqualsAndHashCode(callSuper = true)
@ToString
@Getter
public class StepMove extends Move {

    protected final Position to;

    public StepMove(Figure figure, Position to) {
        super(MoveType.STEP, figure);
        this.to = to;
    }

    protected StepMove(MoveType type, Figure figure, Position to) {
        super(type, figure);
        this.to = to;
    }

    @Override
    public void apply(Board board) {
        if (!isLegal(board)) {
            throw new IllegalMoveException("Can't do step move to taken cell");
        }

        board.moveFigure(figure, to);
    }

    @Override
    public boolean isLegal(Board board) {
        return board.getFigure(to).isEmpty();
    }
}
