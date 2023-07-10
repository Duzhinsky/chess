import { useMakeMoveMutation } from "../API/chessApi"
import { PositionDto } from "../generated/api"
import { id } from "../utils/id"
import { useActions, useAppSelector } from "./reduxHooks"

export const useMove = (position: PositionDto) => {
  const [makeMove] = useMakeMoveMutation()
  const { setSelectedCell } = useActions()
  const cells = useAppSelector((state) => state.cells)

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
