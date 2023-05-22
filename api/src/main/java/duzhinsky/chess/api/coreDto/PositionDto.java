package duzhinsky.chess.api.coreDto;

import duzhinsky.chess.data.game.Position;

public record PositionDto(
    int x,
    int y
) {

    public static PositionDto fromPosition(Position position) {
        return new PositionDto(position.getX(), position.getY());
    }

    public Position toPosition() {
        return new Position(x, y);
    }
}
