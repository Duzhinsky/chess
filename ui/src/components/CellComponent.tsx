import { FC } from "react"
import { Cell } from "../models/Cell"
import { useActions, useAppSelector } from "../hooks/reduxHooks"
import { selectedCellSelector } from "../store/selectors"

interface CellComponentProps {
  cell: Cell
}

const CellComponent: FC<CellComponentProps> = ({ cell }) => {
  const selectedCell = useAppSelector(selectedCellSelector)
  const { setSelectedCell } = useActions()

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

  const canSelect =
    selectedCell?.x === cell.x && selectedCell.y === cell.y && cell.figure

  return (
    <div
      className={[
        "cell",
        cell.color,
        canSelect && "select",
        cell.available && cell.figure && "available__beat",
      ].join(" ")}
      onClick={() => selectCell(cell)}
    >
      {cell.figure && (
        <img
          src={cell.figure.icon}
          alt="cell.figure.icon"
          style={{ width: 64 }}
        />
      )}
      {cell.available && !cell.figure && <div className="available" />}
    </div>
  )
}

export default CellComponent
