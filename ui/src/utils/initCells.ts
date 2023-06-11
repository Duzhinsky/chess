import { CellProps } from "../components/Cell"
import { Color } from "../generated/api"

export const initCells = (): CellProps[][] => {
  let cells = []
  for (let y = 0; y < 8; y++) {
    const row: CellProps[] = []
    for (let x = 0; x < 8; x++) {
      row.push({
        position: { x: x, y: y },
        figure: null,
        color: (y + x) % 2 ? Color.BLACK : Color.WHITE,
      })
    }
    cells.push(row)
  }
  return cells
}
