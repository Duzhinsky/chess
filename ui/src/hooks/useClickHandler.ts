import { PositionDto } from "../generated/api"
import { useActions } from "./reduxHooks"
import { useMove } from "./useMove"

export const useClickHandler = () => {
  const { setSelectedCell, highlightMoves } = useActions()

  return function useInside(position: PositionDto) {
    setSelectedCell(position)

    highlightMoves({ x: position.x, y: position.y })

    useMove(position)
  }
}
