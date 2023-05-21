import { Colors } from "../Colors"
import icon from "../../figures/blackPawn.svg"
import { Cell } from "../Cell"

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
  cell: Cell
  name: FigureNames
  icon: typeof icon | null

  id: number

  constructor(color: Colors, cell: Cell) {
    this.color = color
    this.name = FigureNames.FIGURE
    this.cell = cell
    this.cell.figure = this

    this.id = Math.random()
  }
}
