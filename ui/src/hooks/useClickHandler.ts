import { useMakeMoveMutation } from "../API/chessApi"
import { PositionDto } from "../generated/api"
import { id } from "../utils/id"
import { useAppSelector } from "./reduxHooks"

export const useClickHandler = (
  setSelectedCell: (position: PositionDto | null) => void,
  highlightMoves: (position: PositionDto) => void
) => {
  const [makeMove] = useMakeMoveMutation()
  const cells = useAppSelector((state) => state.cells)

  return function useInside(position: PositionDto) {
    setSelectedCell(position)
    highlightMoves({ x: position.x, y: position.y })

    if (cells.cells[position.y][position.x].available) {
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
