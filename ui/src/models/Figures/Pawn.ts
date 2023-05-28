import { Colors } from "../Colors"
import { Figure, FigureNames } from "./Figure"
import blackLogo from "../../figures/blackPawn.svg"
import whiteLogo from "../../figures/whitePawn.svg"

export class Pawn extends Figure {
  constructor(x: number, y: number, color: Colors) {
    super(x, y, color, FigureNames.PAWN)
    this.icon = color === Colors.BLACK ? blackLogo : whiteLogo
  }
}
