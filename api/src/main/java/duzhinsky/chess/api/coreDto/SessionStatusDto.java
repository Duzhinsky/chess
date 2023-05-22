package duzhinsky.chess.api.coreDto;

import duzhinsky.chess.data.session.Session;
import duzhinsky.chess.data.session.SessionStatus;

public enum SessionStatusDto {
    CREATED,
    SEARCHING_OPPONENT,
    YOUR_MOVE,
    OPPONENT_MOVE,
    CANCELLED,
    FINISHED;
    
    public static SessionStatusDto fromSession(Session session, String playerId) {
        return session.getSessionStatus() == SessionStatus.ACTIVE 
            ? (
                session.getPlayers().get(session.getActingColor()).equals(playerId)
                    ? YOUR_MOVE
                    : OPPONENT_MOVE
            ) : SessionStatusDto.valueOf(session.getSessionStatus().toString());
    }
}
