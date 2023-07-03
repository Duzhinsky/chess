import { FC } from "react"
import { Figure } from "../models/Figure"
import { Color, PositionDto } from "../generated/api"
import { useAppSelector } from "../hooks/reduxHooks"
import { selectedCellSelector } from "../store/selectors"

export interface CellProps {
  position: PositionDto
  figure: Figure | null
  color: Color
  available: boolean
  clickHandler: (position: PositionDto) => void
}

const Cell: FC<CellProps> = ({
  figure,
  color,
  position,
  available,
  clickHandler,
}) => {
  const selected = useAppSelector(selectedCellSelector)

  return (
    <div style={{ position: "relative" }}>
      <div
        className={[
          "cell",
          color.toLowerCase(),
          selected?.x === position.x && selected?.y === position.y && "select",
          available && "available",
        ].join(" ")}
        onClick={() => clickHandler(position)}
      >
        {figure?.icon && (
          <img
            draggable={false}
            src={figure.icon}
            alt="cell.figure.icon"
            style={{ width: 64 }}
          />
        )}
      </div>
    </div>
  )
}

export default Cell
