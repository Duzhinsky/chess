package duzhinsky.chess.core.session;

// Dont forget to update dto model duzhinsky.chess.api.coreDto.SessionStatusDto
public enum SessionStatus {
    CREATED,
    SEARCHING_OPPONENT,
    ACTIVE,
    CANCELLED,
    FINISHED
}
