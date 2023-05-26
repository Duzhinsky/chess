package duzhinsky.chess.core;

public class IllegalMoveException extends IllegalArgumentException {

    public IllegalMoveException() {
    }

    public IllegalMoveException(String s) {
        super(s);
    }
}
