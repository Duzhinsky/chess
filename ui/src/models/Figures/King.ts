import { Colors } from "../Colors"
import { Figure, FigureNames } from "./Figure"
import blackLogo from "../../figures/blackKing.svg"
import whiteLogo from "../../figures/whiteKing.svg"

export class King extends Figure {
  constructor(x: number, y: number, color: Colors) {
    super(x, y, color, FigureNames.KING)
    this.icon = color === Colors.BLACK ? blackLogo : whiteLogo
  }
}
