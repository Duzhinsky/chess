package duzhinsky.chess.data.game;

public enum Color {
    WHITE(1),
    BLACK(-1);

    private final int yDirection;

    Color(int yDirection) {
        this.yDirection = yDirection;
    }

    public Position directedOffset(Position offset) {
        return new Position(offset.getX(), offset.getY()* yDirection);
    }
}
