package duzhinsky.chess.core;

import duzhinsky.chess.data.game.Board;
import duzhinsky.chess.data.game.move.CompositeMove;
import duzhinsky.chess.data.game.move.MovePart;

public class BoardManager {

    /**
     * @throws IllegalMoveException if the move is not allowed
     */
    public void makeMove(Board board, CompositeMove move) {
        if (move.getMoves().stream()
            .map(MovePart::getFigure)
            .noneMatch(figure -> figure.getPossibleMoves(board).contains(move))
        ) {
            throw new IllegalMoveException();
        }

        for (var movePart : move.getMoves()) {
            movePart.getFigure().makeMove(movePart, board);
        }

        board.setIteration(board.getIteration() + 1);
    }
}
