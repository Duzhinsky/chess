import { FC, Fragment, useLayoutEffect } from "react"
import Cell from "./Cell"
import { useActions, useAppSelector } from "../hooks/reduxHooks"
import { PositionDto } from "../generated/api"
import {
  useCreateSessionMutation,
  useLazyGetSessionQuery,
  useMakeMoveMutation,
} from "../API/chessApi"

const Board: FC = () => {
  const cells = useAppSelector((state) => state.cells)
  const { setSelectedCell, highlightMoves } = useActions()

  const id = "0719ec61-6349-4a68-b925-8b95ac7a73b3"

  const [getSession] = useLazyGetSessionQuery()

  // const [createSession] = useCreateSessionMutation()

  const [makeMove] = useMakeMoveMutation()

  const clickHandler = (position: PositionDto) => {
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

  useLayoutEffect(() => {
    getSession(id)
    // createSession()
  }, [getSession])

  return (
    <div className="board">
      {cells.cells.map((row, index) => (
        <Fragment key={index}>
          {row.map((cell) => (
            <Cell
              key={JSON.stringify(cell.position)}
              {...cell}
              clickHandler={clickHandler}
            />
          ))}
        </Fragment>
      ))}
    </div>
  )
}

export default Board
