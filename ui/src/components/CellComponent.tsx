import { FC } from "react"
import { Cell } from "../models/Cell"

interface CellComponentProps {
  cell: Cell
  selectedCell: Cell | null
  selectCell: (cell: Cell) => void
}

const CellComponent: FC<CellComponentProps> = ({
  cell,
  selectedCell,
  selectCell,
}) => {
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
      {cell.available && !cell.figure && <div className="available"></div>}
    </div>
  )
}

export default CellComponent
