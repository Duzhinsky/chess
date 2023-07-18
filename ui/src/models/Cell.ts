import { Color, PositionDto } from "../generated/api"
import { Figure } from "./Figure"

export interface CellProps {
  position: PositionDto
  figure: Figure | null
  color: Color
  available: boolean
  clickHandler: (position: PositionDto) => void
}

export interface SelectedCellState {
  selectedCell: PositionDto | null
}

export interface Cell {
  position: PositionDto
  figure: Figure | null
  color: Color
  available: boolean
  moveId: string
}
