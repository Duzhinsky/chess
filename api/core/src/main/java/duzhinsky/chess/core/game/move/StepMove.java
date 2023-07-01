package duzhinsky.chess.core.game.move;

import duzhinsky.chess.core.IllegalMoveException;
import duzhinsky.chess.core.game.Position;
import duzhinsky.chess.core.game.board.Board;
import duzhinsky.chess.core.game.figure.Figure;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import org.springframework.data.annotation.PersistenceCreator;

@EqualsAndHashCode(callSuper = true)
@ToString
@Getter
public class StepMove extends Move {

    public StepMove(String id, Figure figure, Position to) {
        super(id, MoveType.STEP, figure, to);
    }

    @PersistenceCreator
    public StepMove(String id, MoveType type, Figure figure, Position to) {
        super(id, type, figure, to);
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
