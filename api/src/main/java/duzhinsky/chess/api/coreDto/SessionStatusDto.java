package duzhinsky.chess.api.coreDto;

import duzhinsky.chess.data.session.SessionStatus;

public enum SessionStatusDto {
    CREATED(SessionStatus.CREATED),
    SEARCHING_OPPONENT(SessionStatus.SEARCHING_OPPONENT),
    YOUR_MOVE(null),
    OPPONENT_MOVE(null),
    CANCELLED(SessionStatus.CANCELLED),
    FINISHED(SessionStatus.FINISHED);

    private final SessionStatus statusMapping;

    SessionStatusDto(SessionStatus statusMapping) {
        this.statusMapping = statusMapping;
    }

}
