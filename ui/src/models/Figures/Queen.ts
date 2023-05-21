import { Cell } from "../Cell"
import { Colors } from "../Colors"
import { Figure, FigureNames } from "./Figure"
import blackLogo from "../../figures/blackQueen.svg"
import whiteLogo from "../../figures/whiteQueen.svg"

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.name = FigureNames.QUEEN
    this.icon = color === Colors.BLACK ? blackLogo : whiteLogo
  }
}
