import { Colors } from "../Colors"
import { Figure, FigureNames } from "./Figure"
import blackLogo from "../../figures/blackPawn.svg"
import whiteLogo from "../../figures/whitePawn.svg"

export class Pawn extends Figure {
  constructor(color: Colors, name: FigureNames) {
    super(color, name)
    this.icon = color === Colors.BLACK ? blackLogo : whiteLogo
  }
}
