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
public class EnPassantMove extends TakingMove {

    public EnPassantMove(String id, Figure figure, Figure taken) {
        super(id, MoveType.EN_PASSANT, figure, taken);
    }

    @PersistenceCreator
    public EnPassantMove(String id, MoveType type, Figure figure, Figure taken, Position to) {
        super(id, type, figure, taken, to);
    }

    public EnPassantMove(String id, MoveType type, Figure figure, Figure taken) {
        super(id, type, figure, taken);
    }

    @Override
    public void apply(Board board) {
        if (!isLegal(board)) {
            throw new IllegalMoveException("It's not an en passant move");
        }
        super.apply(board);
    }

    @Override
    public boolean isLegal(Board board) {
        return taken.getType() == FigureType.PAWN
            && figure.getType() == FigureType.PAWN
            && taken.getLastMoveIteration() == board.getIteration() - 1;
    }
}
