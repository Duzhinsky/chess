package duzhinsky.chess.core.game.move;

import duzhinsky.chess.core.game.Position;
import duzhinsky.chess.core.game.figure.Figure;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MovePart {

    private Figure figure;

    private Position to;

    private int iteration;
}

