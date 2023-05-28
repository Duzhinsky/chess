import { useEffect } from "react"
import BoardComponent from "../components/BoardComponent"
import { useActions } from "../hooks/reduxHooks"

const Game = () => {
  const { createBoard } = useActions()

  function restart() {
    createBoard()
  }

  useEffect(() => restart(), []) //eslint-disable-line

  return (
    <div className="game">
      <BoardComponent />
    </div>
  )
}

export default Game
