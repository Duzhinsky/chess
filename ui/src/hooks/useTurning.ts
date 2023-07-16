import { PositionDto, MoveDto, MoveType } from "./../generated/api"

export const useTurning = (
  position: PositionDto,
  moves: MoveDto[],
  toggleTurningModal: () => void
) => {
  const turningData = moves.filter(
    (move) =>
      move.type === MoveType.TURNING &&
      move.to.x === position.x &&
      move.to.y === position.y &&
      move
  )

  turningData.length && toggleTurningModal()

  return turningData
}
