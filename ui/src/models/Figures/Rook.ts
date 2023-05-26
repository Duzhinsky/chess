import { Colors } from "../Colors"
import { Figure, FigureNames } from "./Figure"
import blackLogo from "../../figures/blackRook.svg"
import whiteLogo from "../../figures/whiteRook.svg"

export class Rook extends Figure {
  constructor(color: Colors, name: FigureNames) {
    super(color, name)
    this.icon = color === Colors.BLACK ? blackLogo : whiteLogo
  }
}
