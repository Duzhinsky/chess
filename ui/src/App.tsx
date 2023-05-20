import { useEffect, useState } from "react"
import "./App.css"
import BoardComponent from "./components/BoardComponent"
import { Board } from "./models/Board"

function App() {
  const [board, setBoard] = useState<Board>(new Board())

  function restart() {
    const newBoard = new Board()
    newBoard.initCells()
    setBoard(newBoard)
  }

  useEffect(() => restart(), [])

  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  )
}

export default App
