import { useState } from "react"
import { Board } from "../models/Board"

const BoardComponent = () => {
  const [board, setBoard] = useState<Board>(new Board())
  return (
    <div className="board">
      <div className="cell black"></div>
      <div className="cell white"></div>
      <div className="cell black"></div>
      <div className="cell white"></div>
    </div>
  )
}

export default BoardComponent
