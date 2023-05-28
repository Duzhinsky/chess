import { Board } from "./Board"
import { Colors } from "./Colors"
import { Figure } from "./Figures/Figure"

export class Cell {
  readonly x: number
  readonly y: number
  readonly color: Colors

  figure: Figure | null
  available: boolean

  // board: Board

  id: number

  constructor(
    x: number,
    y: number,
    color: Colors,
    figure: Figure | null
    // board: Board
  ) {
    this.x = x
    this.y = y
    this.color = color
    this.figure = figure
    this.available = false

    // this.board = board

    this.id = Math.random()
  }

  private isEmpty() {
    return this.figure === null
  }

  public isHorizontalEmpty(target: Cell, board: Board) {
    if (this.y !== target.y) return false
    const min = Math.min(this.x, target.x)
    const max = Math.max(this.x, target.x)

    for (let i = min + 1; i < max; i++) {
      if (!board.getCell(i, this.y).isEmpty()) {
        return false
      }
    }

    return true
  }

  public isVerticalEmpty(target: Cell, board: Board) {
    if (this.x !== target.x) return false
    const min = Math.min(this.y, target.y)
    const max = Math.max(this.y, target.y)
    if (target.x == 0 && target.y == 2) {
      console.log(min, max)
    }

    for (let i = min + 1; i < max; i++) {
      if (!board.getCell(this.x, i).isEmpty()) {
        return false
      }
    }
    return true
  }
}
