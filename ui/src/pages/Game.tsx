import { useLayoutEffect } from "react"
import { useCreateSessionMutation } from "../API/chessApi"
import Board from "../components/Board"

const Game = () => {
  const [createSession] = useCreateSessionMutation()

  useLayoutEffect(() => {
    createSession()
  }, [createSession])

  return (
    <div className="game">
      <Board />
    </div>
  )
}

export default Game
