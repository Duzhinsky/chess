import { FC } from "react"
import { Cell } from "../models/Cell"

interface CellComponentProps {
  cell: Cell
}

const CellComponent: FC<CellComponentProps> = ({ cell }) => {
  return (
    <div className={["cell", cell.color].join(" ")}>
      {cell.figure && (
        <img
          src={cell.figure.icon}
          alt="cell.figure.icon"
          style={{ width: 64 }}
        />
      )}
    </div>
  )
}

export default CellComponent
