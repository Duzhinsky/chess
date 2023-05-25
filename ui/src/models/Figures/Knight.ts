import { Colors } from "../Colors"
import { Figure, FigureNames } from "./Figure"
import blackLogo from "../../figures/blackKnight.svg"
import whiteLogo from "../../figures/whiteKnight.svg"

export class Knight extends Figure {
  constructor(color: Colors) {
    super(color)
    this.name = FigureNames.KNIGHT
    this.icon = color === Colors.BLACK ? blackLogo : whiteLogo
  }
}
