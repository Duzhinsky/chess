package duzhinsky.chess.data.game.move;

import duzhinsky.chess.data.game.Position;
import duzhinsky.chess.data.game.figure.Figure;
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

