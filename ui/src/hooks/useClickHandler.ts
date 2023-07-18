import { useMakeMoveMutation } from "../API/chessApi"
import { PositionDto } from "../generated/api"
import { id } from "../utils/id"
import { useActions, useAppSelector } from "./reduxHooks"
import { useTurning } from "./useTurning"

export const useClickHandler = (
  setSelectedCell: (position: PositionDto | null) => void,
  highlightMoves: (position: PositionDto) => void
) => {
  const cells = useAppSelector((state) => state.cells)
  const [makeMove] = useMakeMoveMutation()
  const { toggleTurningModal, setMoves } = useActions()

  return function useInside(position: PositionDto) {
    setSelectedCell(position)

    highlightMoves({ x: position.x, y: position.y })
    const turningData = useTurning(position, cells.moves, toggleTurningModal)
    setMoves(turningData)

    if (cells.cells[position.y][position.x].available && !turningData.length) {
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
