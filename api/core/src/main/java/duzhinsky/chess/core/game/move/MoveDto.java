package duzhinsky.chess.core.game.move;

import com.fasterxml.jackson.annotation.JsonInclude;
import duzhinsky.chess.core.game.PositionDto;
import duzhinsky.chess.core.game.board.Board;
import duzhinsky.chess.core.game.figure.FigureDto;
import duzhinsky.chess.core.game.figure.FigureType;
import java.util.Optional;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
public record MoveDto(

    MoveType type,

    FigureDto figure,

    PositionDto to,

    Optional<FigureDto> rook, // castling

    Optional<FigureDto> taken, // taking, enPassant

    Optional<FigureType> turnInto // turning
) {

    public static MoveDto fromMove(Move move) {
        return new MoveDto(
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

    public Move toMove(Board board) {
        var figureModel = figure.toFigure(board);
        return switch (type) {
            case STEP ->
                new StepMove(figureModel, to.toPosition());
            case TAKING ->
                new TakingMove(figureModel, taken.orElseThrow().toFigure(board));
            case TURNING ->
                new TurningMove(figureModel, turnInto.orElseThrow(), to.toPosition());
            case CASTLING ->
                new CastlingMove(figureModel, rook.orElseThrow().toFigure(board));
            case EN_PASSANT ->
                new EnPassantMove(figureModel, taken.orElseThrow().toFigure(board));
        };
    }
}
