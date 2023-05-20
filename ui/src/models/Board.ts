import { Cell } from "./Cell"
import { Colors } from "./Colors"

export class Board {
  cells: Cell[][] = []

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = []
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2) {
          row.push(new Cell(j, i, Colors.BLACK, this, null))
        } else {
          row.push(new Cell(j, i, Colors.WHITE, this, null))
        }
      }
      this.cells.push(row)
    }
  }
}
