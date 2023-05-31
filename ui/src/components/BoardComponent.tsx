import { FC, Fragment } from "react"
import CellComponent from "./CellComponent"
import { useAppSelector } from "../hooks/reduxHooks"

const BoardComponent: FC = () => {
  const { cells } = useAppSelector((state) => state.cells)
  return (
    <div className="board">
      {cells.map((row, index) => (
        <Fragment key={index}>
          {row.map((cell) => (
            <CellComponent key={Math.random()} {...cell} />
          ))}
        </Fragment>
      ))}
    </div>
  )
}

export default BoardComponent
