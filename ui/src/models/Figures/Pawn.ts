import { Cell } from "../Cell"
import { Colors } from "../Colors"
import { Figure, FigureNames } from "./Figure"
import blackLogo from "../../figures/blackPawn.svg"
import whiteLogo from "../../figures/whitePawn.svg"

export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.name = FigureNames.PAWN
    this.icon = color === Colors.BLACK ? blackLogo : whiteLogo
  }
}
