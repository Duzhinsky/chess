import { Cell } from "../Cell"
import { Colors } from "../Colors"
import { Figure, FigureNames } from "./Figure"
import blackLogo from "../../figures/blackKnight.svg"
import whiteLogo from "../../figures/whiteKnight.svg"

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.name = FigureNames.KNIGHT
    this.icon = color === Colors.BLACK ? blackLogo : whiteLogo
  }
}
