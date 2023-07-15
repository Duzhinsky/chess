import { PositionDto, Color, MoveDto } from "../generated/api"
import { Figure } from "./Figure"

export interface Cell {
  position: PositionDto
  figure: Figure | null
  color: Color
  available: boolean
  moveId: string
}

export interface CellsState {
  cells: Cell[][]
  moves: MoveDto[]
}

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

export interface ModalState {
  turningModal: boolean
}

export interface TurningState {
  moves: MoveDto[]
}
