import { FC, Fragment, useLayoutEffect, useState } from "react"
import { Modal, Radio } from "antd"
import {
  // useCreateSessionMutation,
  useLazyGetSessionQuery,
  useMakeMoveMutation,
} from "../API/chessApi"
import { useActions, useAppSelector } from "../hooks/reduxHooks"
import { useClickHandler } from "../hooks/useClickHandler"
import { id } from "../utils/id"
import { turningList } from "../utils/turningList"
import { FigureType } from "../generated/api"
import { selectTurningMoves } from "../store/selectors"
import Cell from "./Cell"

const Board: FC = () => {
  const [selectedValue, setSelectedValue] = useState<FigureType | null>(null)

  const cells = useAppSelector((state) => state.cells)
  const turningModal = useAppSelector((state) => state.modal.turningModal)
  const { setSelectedCell, highlightMoves, toggleTurningModal } = useActions()

  const [getSession] = useLazyGetSessionQuery()
  const [makeMove] = useMakeMoveMutation()
  const moves = useAppSelector(selectTurningMoves)

  // const [create] = useCreateSessionMutation()

  const clickHandler = useClickHandler(setSelectedCell, highlightMoves)

  const handleOk = (selectedValue: FigureType) => {
    const move = moves.find((move) => move.turnInto === selectedValue)
    makeMove({ id, moveId: move!.id })

    toggleTurningModal()
    setSelectedCell(null)
  }

  const handleCancel = () => {
    toggleTurningModal()
    setSelectedCell(null)
  }

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
          title="Choose the figure"
          open={turningModal}
          onOk={() => handleOk(selectedValue!)}
          onCancel={() => handleCancel()}
          centered
        >
          <Radio.Group
            name="radiogroup"
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            {turningList.map((figure) => (
              <Radio key={figure} value={figure}>
                {figure}
              </Radio>
            ))}
          </Radio.Group>
        </Modal>
      )}
    </>
  )
}

export default Board
