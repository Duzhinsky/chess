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
public class CastlingMove extends Move {

    public CastlingMove(String id, Figure figure, Figure rook) {
        this(id, MoveType.CASTLING, figure, rook);
    }

    @PersistenceCreator
    public CastlingMove(String id, MoveType type, Figure figure, Figure rook) {
        super(id, type, figure, new Position(getKingTo(figure, rook), figure.getPosition().getY()));
        this.rook = rook;
    }

    private final Figure rook;

    @Override
    public boolean isLegal(Board board) {
        // todo когда буду добавлять мат, нужно сделать тут условие
        if (!(figure.isFirstMove() && rook.isFirstMove())) {
            return false;
        }

        int l = Math.min(rook.getPosition().getX(), figure.getPosition().getX());
        int r = Math.max(rook.getPosition().getX(), figure.getPosition().getX());
        for (int x = l + 1; x < r; ++x) {
            if (board.getFigure(new Position(x, figure.getPosition().getY())).isPresent()) {
                return false;
            }
        }

        int kingTo = getKingTo(figure, rook);
        int passedX = Math.min(kingTo, figure.getPosition().getX()) + 1;
        Position passed = new Position(passedX, figure.getPosition().getY());
        if (board.getUnderAttackPositions().stream().anyMatch(pos -> pos.equals(passed))) {
            return false;
        }

        return true;
    }

    @Override
    public void apply(Board board) {
        if (!isLegal(board)) {
            throw new IllegalMoveException("This castling is illegal");
        }
        super.apply(board);

        int kingToX = getKingTo(figure, rook);
        Position kingTo = new Position(kingToX, figure.getPosition().getY());
        int passedX = Math.min(kingToX, figure.getPosition().getX()) + 1;
        Position passed = new Position(passedX, figure.getPosition().getY());

        board.moveFigure(figure, kingTo);
        board.moveFigure(rook, passed);
    }

    private static int getKingTo(Figure figure, Figure rook) {
        return figure.getPosition().getX() < rook.getPosition().getX()
            ? figure.getPosition().getX() + 2
            : figure.getPosition().getX() - 2;
    }
}
