package duzhinsky.chess.core.game;

public enum Color {
    WHITE(1, 0),
    BLACK(-1, 7);

    private final int yDirection;

    private final int baseHorizontal;

    Color(int yDirection, int baseHorizontal) {
        this.yDirection = yDirection;
        this.baseHorizontal = baseHorizontal;
    }

    public Position directedOffset(Position offset) {
        return new Position(offset.getX(), offset.getY()* yDirection);
    }

    public int getBaseHorizontal() {
        return baseHorizontal;
    }
}
