import { FC } from "react"
import { Figure } from "../models/Figure"
import { Color, PositionDto } from "../generated/api"

export interface CellProps {
  position: PositionDto
  figure: Figure | null
  color: Color
}

const Cell: FC<CellProps> = ({ figure, color }) => {
  return (
    <div className={["cell", color].join(" ")}>
      {figure?.icon && (
        <img src={figure.icon} alt="cell.figure.icon" style={{ width: 64 }} />
      )}
    </div>
  )
}

export default Cell
