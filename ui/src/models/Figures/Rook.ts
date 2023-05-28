import { Colors } from "../Colors"
import { Figure, FigureNames } from "./Figure"
import blackLogo from "../../figures/blackRook.svg"
import whiteLogo from "../../figures/whiteRook.svg"
import { Cell } from "../Cell"
import { Board } from "../Board"

export class Rook extends Figure {
  constructor(x: number, y: number, color: Colors) {
    super(x, y, color, FigureNames.ROOK)
    this.icon = color === Colors.BLACK ? blackLogo : whiteLogo
  }

  public canMove(target: Cell, board: Board): boolean {
    if (!super.canMove(target, board)) return false
    if (target.x == 0 && target.y == 2) {
      console.log("going to true")
    }
    if (
      board.getCell(this.x, this.y).isVerticalEmpty(target, board) ||
      board.getCell(this.x, this.y).isHorizontalEmpty(target, board)
    )
      return true
    if (target.x == 0 && target.y == 2) {
      console.log("flase")
    }
    return false
  }
}
