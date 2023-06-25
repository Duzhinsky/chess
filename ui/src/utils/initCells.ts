import { Color } from "../generated/api"
import { Cell } from "../models/Cell"

export const initCells = (): Cell[][] => {
  let cells = []
  for (let y = 0; y < 8; y++) {
    const row: Cell[] = []
    for (let x = 0; x < 8; x++) {
      row.push({
        position: { x: x, y: y },
        figure: null,
        color: (y + x) % 2 ? Color.BLACK : Color.WHITE,
        available: false,
      })
    }
    cells.push(row)
  }
  return cells
}
