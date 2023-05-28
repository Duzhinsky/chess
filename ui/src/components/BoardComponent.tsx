import { FC, Fragment } from "react"
import CellComponent from "./CellComponent"
import { useAppSelector } from "../hooks/reduxHooks"
import { boardSelector, selectedCellSelector } from "../store/selectors"

const BoardComponent: FC = () => {
  const board = useAppSelector(boardSelector)
  const selectedCell = useAppSelector(selectedCellSelector)

  board.highlightCells(selectedCell) // cuz component "didUpdate" on each user click onto Cell

  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <Fragment key={index}>
          {row.map((cell) => (
            <CellComponent key={cell.id} cell={cell} />
          ))}
        </Fragment>
      ))}
    </div>
  )
}

export default BoardComponent
