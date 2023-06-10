import { Colors } from "./Colors"
import { FigureType } from "./Figure"

export interface ISession {
  id: string
  board: FiguresOnBoard
  possibleMoves: PossibleMfe[]
}

export interface FiguresOnBoard {
  figures: Figure[]
}

export interface Figure {
  type: FigureType
  position: Position
  color: Colors
}

export interface Position {
  x: number
  y: number
}

export interface PossibleMfe {
  type: string
  figure: Figure
  to: To
}

export interface To {
  x: number
  y: number
}
