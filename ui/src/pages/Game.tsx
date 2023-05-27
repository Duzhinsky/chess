import { useEffect, useState } from "react"
import BoardComponent from "../components/BoardComponent"
import { Board } from "../models/Board"

const Game = () => {
  const [board, setBoard] = useState<Board>(new Board())

  function restart() {
    const newBoard = new Board()
    setBoard(newBoard)
  }

  useEffect(() => restart(), [])

  return (
    <div className="game">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  )
}

export default Game
