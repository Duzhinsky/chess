import { MoveDto } from "../generated/api"
import { Cell } from "./Cell"

export interface CellsState {
  cells: Cell[][]
  moves: MoveDto[]
}
