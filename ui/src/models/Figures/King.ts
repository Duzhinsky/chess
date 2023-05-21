import { Cell } from "../Cell"
import { Colors } from "../Colors"
import { Figure, FigureNames } from "./Figure"
import blackLogo from "../../figures/blackKing.svg"
import whiteLogo from "../../figures/whiteKing.svg"

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.name = FigureNames.KING
    this.icon = color === Colors.BLACK ? blackLogo : whiteLogo
  }
}
