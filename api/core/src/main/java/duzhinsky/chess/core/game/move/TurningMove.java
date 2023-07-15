package duzhinsky.chess.core.game.move;

import duzhinsky.chess.core.IllegalMoveException;
import duzhinsky.chess.core.game.Position;
import duzhinsky.chess.core.game.board.Board;
import duzhinsky.chess.core.game.figure.Figure;
import duzhinsky.chess.core.game.figure.FigureType;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import org.springframework.data.annotation.PersistenceCreator;

@EqualsAndHashCode(callSuper = true)
@ToString
@Getter
public class TurningMove extends Move {

    protected final FigureType turnInto;

    protected final Move other;

    public TurningMove(String id, Move other, FigureType turnInto) {
        super(id, MoveType.TURNING, other.figure, other.to);
        this.turnInto = turnInto;
        this.other = other;
    }

    @PersistenceCreator
    public TurningMove(String id, MoveType type, Figure figure, Position to, FigureType turnInto, Move other) {
        super(id, type, figure, to);
        this.turnInto = turnInto;
        this.other = other;
    }

    @Override
    public void apply(Board board) {
        if (!isLegal(board)) {
            throw new IllegalMoveException(
                "Can't do turning here. The figure is not a pawn or is not on the last horizontal.");
        }
        other.apply(board);
        figure.setType(turnInto);
    }

    @Override
    public boolean isLegal(Board board) {
        return to.getY() == figure.getColor().getOpponentHorizontal()
            && figure.getType() == FigureType.PAWN
            && other.isLegal(board);
    }
}
