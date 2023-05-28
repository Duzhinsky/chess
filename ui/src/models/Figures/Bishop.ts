import { Colors } from "../Colors"
import { Figure, FigureNames } from "./Figure"
import blackLogo from "../../figures/blackBishop.svg"
import whiteLogo from "../../figures/whiteBishop.svg"

export class Bishop extends Figure {
  constructor(x: number, y: number, color: Colors) {
    super(x, y, color, FigureNames.BISHOP)
    this.icon = color === Colors.BLACK ? blackLogo : whiteLogo
  }
}
