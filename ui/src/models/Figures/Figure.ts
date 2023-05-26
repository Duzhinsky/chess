import { Colors } from "../Colors"
import icon from "../../figures/blackPawn.svg"

export enum FigureNames {
  PAWN = "pawn",
  ROOK = "rook",
  KNIGHT = "knight",
  BISHOP = "bishop",
  QUEEN = "queen",
  KING = "king",
}

export abstract class Figure {
  color: Colors
  name: FigureNames
  icon: typeof icon

  id: number

  constructor(color: Colors, name: FigureNames) {
    this.color = color
    this.name = name

    this.id = Math.random()
  }
}
