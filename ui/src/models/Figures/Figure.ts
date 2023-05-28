import { Colors } from "../Colors"
import icon from "../../figures/blackPawn.svg"
import { Cell } from "../Cell"
import { Board } from "../Board"

export enum FigureNames {
  PAWN = "pawn",
  ROOK = "rook",
  KNIGHT = "knight",
  BISHOP = "bishop",
  QUEEN = "queen",
  KING = "king",
}

export abstract class Figure {
  x: number
  y: number

  color: Colors
  name: FigureNames
  icon: typeof icon

  id: number

  constructor(x: number, y: number, color: Colors, name: FigureNames) {
    this.x = x
    this.y = y

    this.color = color
    this.name = name

    this.id = Math.random()
  }

  public canMove(target: Cell, board: Board) {
    if (target.figure?.name === FigureNames.KING) return false
    if (target.figure?.color === this.color) return false
    return true
  }
}
