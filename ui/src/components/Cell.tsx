import { FC } from "react"
import { Figure } from "../models/Figure"
import { Color, PositionDto } from "../generated/api"
import { useActions, useAppSelector } from "../hooks/reduxHooks"
import { selectedCellSelector } from "../store/selectors"

export interface CellProps {
  position: PositionDto
  figure: Figure | null
  color: Color
}

const Cell: FC<CellProps> = ({ figure, color, position }) => {
  const { setSelectedCell } = useActions()
  const selected = useAppSelector(selectedCellSelector)

  return (
    <div
      className={[
        "cell",
        color.toLowerCase(),
        selected?.x === position.x && selected?.y === position.y && "select",
      ].join(" ")}
      onClick={() => setSelectedCell(position)}
    >
      {figure?.icon && (
        <img src={figure.icon} alt="cell.figure.icon" style={{ width: 64 }} />
      )}
    </div>
  )
}

export default Cell
