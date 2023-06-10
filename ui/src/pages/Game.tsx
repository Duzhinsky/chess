import BoardComponent from "../components/BoardComponent"
import { useGetSessionQuery } from "../API/chessApi"
import { useActions } from "../hooks/reduxHooks"

const Game = () => {
  const { data } = useGetSessionQuery("")

  const { setCells } = useActions()

  if (data) setCells(data.board)

  return (
    <div className="game">
      <BoardComponent />
    </div>
  )
}

export default Game
