import { FC, Fragment, useLayoutEffect } from "react"
import { useLazyGetSessionQuery } from "../API/chessApi"
import { useAppSelector } from "../hooks/reduxHooks"
import Cell from "./Cell"
import { useClickHandler } from "../hooks/useClickHandler"
import { id } from "../utils/id"

const Board: FC = () => {
  const cells = useAppSelector((state) => state.cells)

  const [getSession] = useLazyGetSessionQuery()

  const clickHandler = useClickHandler()

  useLayoutEffect(() => {
    getSession(id)
  }, [getSession])

  return (
    <div className="board">
      {cells.cells.map((row, index) => (
        <Fragment key={index}>
          {row.map((cell) => (
            <Cell
              key={JSON.stringify(cell.position)}
              {...cell}
              clickHandler={clickHandler}
            />
          ))}
        </Fragment>
      ))}
    </div>
  )
}

export default Board
