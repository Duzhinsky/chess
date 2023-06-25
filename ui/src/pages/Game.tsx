import { useEffect } from "react"
import { useCreateSessionMutation } from "../API/chessApi"
import Board from "../components/Board"

const Game = () => {
  const [createSession] = useCreateSessionMutation()

  useEffect(() => {
    createSession()
  }, []) //eslint-disable-line

  return (
    <div className="game">
      <Board />
    </div>
  )
}

export default Game
