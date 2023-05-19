package duzhinsky.chess.data.game.move;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CompositeMove {

    private List<MovePart> moves;
}
