import { FC, Fragment, useLayoutEffect } from "react"
import {
  useCreateSessionMutation,
  useLazyGetSessionQuery,
} from "../API/chessApi"
import { useActions, useAppSelector } from "../hooks/reduxHooks"
import Cell from "./Cell"
import { useClickHandler } from "../hooks/useClickHandler"
import { id } from "../utils/id"
import { Modal } from "antd"

const Board: FC = () => {
  const cells = useAppSelector((state) => state.cells)
  const turningModal = useAppSelector((state) => state.modal.turningModal)
  const { setSelectedCell, highlightMoves } = useActions()

  const [getSession] = useLazyGetSessionQuery()

  // const [create] = useCreateSessionMutation()

  const clickHandler = useClickHandler(setSelectedCell, highlightMoves)

  useLayoutEffect(() => {
    getSession(id)
    // create()
  }, [getSession])

  return (
    <>
      <div className="board">
        {cells.cells.map((row, index) => (
          <Fragment key={index}>
            {row.map((cell) => (
              <Cell
                key={JSON.stringify(cell.position)}
                {...cell}
                clickHandler={() => clickHandler(cell.position)}
              />
            ))}
          </Fragment>
        ))}
      </div>

      {turningModal && (
        <Modal
          title="Basic Modal"
          open={turningModal}
          // onOk={handleOk}
          // onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      )}
    </>
  )
}

export default Board
