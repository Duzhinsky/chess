import { FC, Fragment, useEffect, useState } from "react"
import { Board } from "../models/Board"
import CellComponent from "./CellComponent"
import { Cell } from "../models/Cell"

interface BoardComponentProps {
  board: Board
  setBoard: (board: Board) => void
}

const BoardComponent: FC<BoardComponentProps> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  const selectCell = (cell: Cell): void => {
    if (
      selectedCell &&
      cell !== selectedCell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell)
      setSelectedCell(null)
    } else {
      setSelectedCell(cell)
    }
  }

  const highlightBoard = () => {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  const updateBoard = () => {
    const newBoard = board.getCopy()
    setBoard(newBoard)
  }

  useEffect(() => highlightBoard(), [selectedCell]) //eslint-disable-line

  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <Fragment key={index}>
          {row.map((cell) => (
            <CellComponent
              key={cell.id}
              cell={cell}
              selectedCell={selectedCell}
              selectCell={selectCell}
            />
          ))}
        </Fragment>
      ))}
    </div>
  )
}

export default BoardComponent
