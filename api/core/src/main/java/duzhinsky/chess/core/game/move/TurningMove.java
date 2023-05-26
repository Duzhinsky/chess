package duzhinsky.chess.core.game.move;

import duzhinsky.chess.core.IllegalMoveException;
import duzhinsky.chess.core.game.Board;
import duzhinsky.chess.core.game.Position;
import duzhinsky.chess.core.game.figure.Figure;
import duzhinsky.chess.core.game.figure.FigureType;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@EqualsAndHashCode(callSuper = true)
@ToString
@Getter
public class TurningMove extends StepMove {

    protected final FigureType turnInto;

    public TurningMove(Figure figure, FigureType turnInto, Position to) {
        super(MoveType.TURNING, figure, to);
        this.turnInto = turnInto;
    }

    protected TurningMove(MoveType type, Figure figure, FigureType turnInto, Position to) {
        super(type, figure, to);
        this.turnInto = turnInto;
    }

    @Override
    public void apply(Board board) {
        if (!isLegal(board)) {
            throw new IllegalMoveException(
                "Can't do turning here. The figure is not a pawn or is not on the last horizontal.");
        }
    }

    @Override
    public boolean isLegal(Board board) {
        return Math.abs(figure.getPosition().getY() - figure.getColor().getBaseHorizontal()) == 7
            && figure.getType() != FigureType.PAWN
            && super.isLegal(board);
    }
}