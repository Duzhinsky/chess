import { Colors } from "./Colors"
import { Figure } from "./Figures/Figure"

export class Cell {
  readonly x: number
  readonly y: number
  readonly color: Colors

  figure: Figure | null
  available: boolean

  id: number

  constructor(x: number, y: number, color: Colors, figure: Figure | null) {
    this.x = x
    this.y = y
    this.color = color

    this.figure = figure
    this.available = false

    this.id = Math.random()
  }
}
