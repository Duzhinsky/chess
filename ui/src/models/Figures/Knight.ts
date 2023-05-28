import { Colors } from "../Colors"
import { Figure, FigureNames } from "./Figure"
import blackLogo from "../../figures/blackKnight.svg"
import whiteLogo from "../../figures/whiteKnight.svg"

export class Knight extends Figure {
  constructor(x: number, y: number, color: Colors) {
    super(x, y, color, FigureNames.KNIGHT)
    this.icon = color === Colors.BLACK ? blackLogo : whiteLogo
  }
}
