import { PositionDto, Color } from "../generated/api"
import { Figure } from "./Figure"

export interface Cell {
  position: PositionDto
  figure: Figure | null
  color: Color
  available: boolean
}
