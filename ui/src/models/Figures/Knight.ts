import { Colors } from "../Colors"
import { Figure, FigureNames } from "./Figure"
import blackLogo from "../../figures/blackKnight.svg"
import whiteLogo from "../../figures/whiteKnight.svg"

export class Knight extends Figure {
  constructor(color: Colors, name: FigureNames) {
    super(color, name)
    this.icon = color === Colors.BLACK ? blackLogo : whiteLogo
  }
}
