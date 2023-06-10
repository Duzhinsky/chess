import { FC } from "react"
import { Position } from "../models/Position"
import { Figure } from "../models/Figure"
import { useActions, useAppSelector } from "../hooks/reduxHooks"

export interface CellProps {
  position: Position
  figure: Figure | null

  // color: Colors
  available: boolean
  isSelected: boolean
  setIsSelected: () => void
}

const CellComponent: FC<CellProps> = ({
  position,
  figure,
  // color,
  available,
}) => {
  const { setSelectedCell } = useActions()
  const { selectedCell } = useAppSelector((state) => state.selectedCell)
  return (
    <div
      onClick={() => setSelectedCell(position)}
      className={[
        "cell",
        // color,
        selectedCell?.x === position.x &&
          selectedCell?.y === position.y &&
          "select",
        // available && cell.figure && "available__beat",
      ].join(" ")}
    >
      {figure?.icon && (
        <img src={figure.icon} alt="cell.figure.icon" style={{ width: 64 }} />
      )}
      {available && <div className="available" />}
    </div>
  )
}

export default CellComponent
