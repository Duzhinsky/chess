import { useEffect } from "react"
import { useCreateSessionMutation, useGetSessionQuery } from "../API/chessApi"
import Board from "../components/Board"

const Game = () => {
  useEffect(() => {
    createSession()
  }, [])
  const [createSession] = useCreateSessionMutation()

  return (
    <div className="game">
      <Board />
    </div>
  )
}

export default Game
