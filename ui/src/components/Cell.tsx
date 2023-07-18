import { FC } from "react"
import { selectedCellSelector } from "../store/selectors"
import { useAppSelector } from "../hooks/reduxHooks"
import { CellProps } from "../models/Cell"

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
          selected && available && "available",
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
