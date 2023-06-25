import { FC, Fragment } from "react"
import Cell from "./Cell"
import { useActions, useAppSelector } from "../hooks/reduxHooks"
import { PositionDto } from "../generated/api"
import { useGetSessionQuery } from "../API/chessApi"

const Board: FC = () => {
  const { cells } = useAppSelector((state) => state.cells)
  const selectedCell = useAppSelector(
    (state) => state.selectedCell.selectedCell
  )
  const { setSelectedCell, updateMoves, clearMoves } = useActions()

  const id = "b7991772-6db1-43ec-8758-66837d6351dc"
  const { data: sessionData } = useGetSessionQuery(id)

  const clickHandler = (position: PositionDto) => {
    if (cells[position.y][position.x].available) {
      // make a request
    }

    setSelectedCell(position)

    if (selectedCell?.x === position.x && selectedCell.y === position.y) {
      clearMoves()
      return
    }
    if (sessionData?.possibleMoves)
      updateMoves({ moves: sessionData.possibleMoves, position })
  }

  return (
    <div className="board">
      {cells.map((row, index) => (
        <Fragment key={index}>
          {row.map((cell) => (
            <Cell key={Math.random()} {...cell} clickHandler={clickHandler} />
          ))}
        </Fragment>
      ))}
    </div>
  )
}

export default Board
