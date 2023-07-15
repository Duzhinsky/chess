package duzhinsky.chess.core.game.figure;

public enum FigureType {
    BISHOP(null),
    KING(null),
    KNIGHT(null),
    PAWN(new PawnProcessor()),
    QUEEN(null),
    ROOK(null);

    private final FigureProcessor processor;

    FigureType(FigureProcessor processor) {
        this.processor = processor;
    }

    public FigureProcessor getProcessor() {
        return processor;
    }
}
