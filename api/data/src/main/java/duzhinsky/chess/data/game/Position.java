package duzhinsky.chess.data.game;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Position {

    private int x;

    private int y;

    public Position plus(Position rhs) {
        return new Position(x + rhs.getX(), y + rhs.getY());
    }

    public boolean isOnBoard() {
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }
}
