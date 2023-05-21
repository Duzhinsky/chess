import { Cell } from "../Cell"
import { Colors } from "../Colors"
import { Figure, FigureNames } from "./Figure"
import blackLogo from "../../figures/blackRook.svg"
import whiteLogo from "../../figures/whiteRook.svg"

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.name = FigureNames.ROOK
    this.icon = color === Colors.BLACK ? blackLogo : whiteLogo
  }
}