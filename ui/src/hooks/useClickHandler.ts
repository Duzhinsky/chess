import { useMakeMoveMutation } from "../API/chessApi"
import { MoveType, PositionDto } from "../generated/api"
import { id } from "../utils/id"
import { useActions, useAppSelector } from "./reduxHooks"

export const useClickHandler = (
  setSelectedCell: (position: PositionDto | null) => void,
  highlightMoves: (position: PositionDto) => void
) => {
  const [makeMove] = useMakeMoveMutation()
  const cells = useAppSelector((state) => state.cells)
  const { toggleTurningModal } = useActions()

  return function useInside(position: PositionDto) {
    setSelectedCell(position)
    highlightMoves({ x: position.x, y: position.y })

    if (cells.cells[position.y][position.x].available) {
      cells.moves.map((move) => {
        if (
          move.type === MoveType.TURNING &&
          move.to.x === position.x &&
          move.to.y === position.y
        ) {
          toggleTurningModal()
          return
        }
      })

      const indexId = cells.moves.findIndex(
        (move) => move.to.x === position.x && move.to.y === position.y
      )
      makeMove({
        id,
        moveId: cells.moves[indexId].id,
      })
      setSelectedCell(null)
    }
  }
}
