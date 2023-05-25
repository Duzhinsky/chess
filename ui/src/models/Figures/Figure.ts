import { Colors } from "../Colors"
import icon from "../../figures/blackPawn.svg"

export enum FigureNames {
  FIGURE = "figure",
  PAWN = "pawn",
  ROOK = "rook",
  KNIGHT = "knight",
  BISHOP = "bishop",
  QUEEN = "queen",
  KING = "king",
}

export class Figure {
  color: Colors
  name: FigureNames
  icon: typeof icon | null

  id: number

  constructor(color: Colors) {
    this.color = color
    this.name = FigureNames.FIGURE

    this.id = Math.random()
  }
}
