package duzhinsky.chess.core.game.move;

import duzhinsky.chess.core.IllegalMoveException;
import duzhinsky.chess.core.game.board.Board;
import duzhinsky.chess.core.game.figure.Figure;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import org.springframework.data.annotation.PersistenceCreator;

@EqualsAndHashCode(callSuper = true)
@ToString
@Getter
public class TakingMove extends Move {

    protected final Figure taken;

    public TakingMove(String id, Figure figure, Figure taken) {
        super(id, MoveType.TAKING, figure, taken.getPosition());
        this.taken = taken;
    }

    @PersistenceCreator
    public TakingMove(String id, MoveType type, Figure figure, Figure taken) {
        super(id, type, figure, taken.getPosition());
        this.taken = taken;
    }

    @Override
    public void apply(Board board) {
        if (!isLegal(board)) {
            throw new IllegalMoveException("Can't do taking here. Figure on board is absent or does not matches argument");
        }

        board.moveFigure(figure, taken.getPosition());
    }

    @Override
    public boolean isLegal(Board board) {
        return board
            .getFigure(taken.getPosition())
            .filter(onBoard -> onBoard.equals(taken))
            .isPresent();
    }
}
