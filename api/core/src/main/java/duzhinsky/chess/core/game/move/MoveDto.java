package duzhinsky.chess.core.game.move;

import com.fasterxml.jackson.annotation.JsonInclude;
import duzhinsky.chess.core.game.PositionDto;
import duzhinsky.chess.core.game.figure.FigureDto;
import duzhinsky.chess.core.game.figure.FigureType;

import java.util.Optional;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
public record MoveDto(

    String id,

    MoveType type,

    FigureDto figure,

    PositionDto to,

    Optional<FigureDto> rook, // castling

    Optional<FigureDto> taken, // taking, enPassant

    Optional<FigureType> turnInto // turning
) {

    public static MoveDto fromMove(Move move) {
        return new MoveDto(
            move.getId(),
            move.getType(),
            FigureDto.fromFigure(move.getFigure()),
            PositionDto.fromPosition(move.getTo()),
            Optional.ofNullable(
                move instanceof CastlingMove castlingMove
                    ? FigureDto.fromFigure(castlingMove.getRook()) : null
            ),
            Optional.ofNullable(
                move instanceof TakingMove takingMove
                    ? FigureDto.fromFigure(takingMove.getTaken()) : null
            ),
            Optional.ofNullable(
                move instanceof TurningMove turningMove
                    ? turningMove.getTurnInto() : null
            )
        );
    }
}
