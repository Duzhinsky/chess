import { FC, Fragment } from "react"
import Cell from "./Cell"
import { useAppSelector } from "../hooks/reduxHooks"

const Board: FC = () => {
  const { cells } = useAppSelector((state) => state.cells)
  return (
    <div className="board">
      {cells.map((row, index) => (
        <Fragment key={index}>
          {row.map((cell) => (
            <Cell key={Math.random()} {...cell} />
          ))}
        </Fragment>
      ))}
    </div>
  )
}

export default Board
