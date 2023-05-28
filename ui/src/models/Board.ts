import { Cell } from "./Cell"
import { Colors } from "./Colors"
import { Bishop } from "./Figures/Bishop"
import { Figure } from "./Figures/Figure"
import { King } from "./Figures/King"
import { Knight } from "./Figures/Knight"
import { Pawn } from "./Figures/Pawn"
import { Queen } from "./Figures/Queen"
import { Rook } from "./Figures/Rook"

export class Board {
  cells: Cell[][] = []

  private initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = []
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2) {
          row.push(new Cell(j, i, Colors.BLACK, null))
        } else {
          row.push(new Cell(j, i, Colors.WHITE, null))
        }
      }
      this.cells.push(row)
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x] // x - column | y - row
  }

  private setCell(figure: Figure, coords: [number, number]) {
    return (this.getCell(...coords).figure = figure)
  }

  private addPawns() {
    for (let x = 0; x < 8; x++) {
      this.setCell(new Pawn(x, 6, Colors.WHITE), [x, 6])
      this.setCell(new Pawn(x, 1, Colors.BLACK), [x, 1])
    }
  }

  private addRooks() {
    this.setCell(new Rook(0, 0, Colors.BLACK), [0, 0])
    this.setCell(new Rook(7, 0, Colors.BLACK), [7, 0])

    this.setCell(new Rook(0, 7, Colors.WHITE), [0, 7])
    this.setCell(new Rook(7, 7, Colors.WHITE), [7, 7])
  }

  private addKnights() {
    this.setCell(new Knight(1, 0, Colors.BLACK), [1, 0])
    this.setCell(new Knight(6, 0, Colors.BLACK), [6, 0])

    this.setCell(new Knight(1, 6, Colors.WHITE), [1, 7])
    this.setCell(new Knight(6, 7, Colors.WHITE), [6, 7])
  }

  private addBishops() {
    this.setCell(new Bishop(2, 0, Colors.BLACK), [2, 0])
    this.setCell(new Bishop(5, 0, Colors.BLACK), [5, 0])

    this.setCell(new Bishop(2, 7, Colors.WHITE), [2, 7])
    this.setCell(new Bishop(5, 7, Colors.WHITE), [5, 7])
  }

  private addQueens() {
    this.setCell(new Queen(3, 0, Colors.BLACK), [3, 0])

    this.setCell(new Queen(3, 7, Colors.WHITE), [3, 7])
  }

  private addKings() {
    this.setCell(new King(4, 0, Colors.BLACK), [4, 0])

    this.setCell(new King(4, 7, Colors.WHITE), [4, 7])
  }

  private addFigures() {
    this.addPawns()
    this.addRooks()
    this.addKnights()
    this.addBishops()
    this.addQueens()
    this.addKings()
  }

  public highlightCells(selectedCell: Cell | null) {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const target = this.cells[i][j]
        target.available = !!selectedCell?.figure?.canMove(target, this)
      }
    }
  }

  public moveFigure(startCell: Cell, target: Cell) {
    if (startCell.figure?.canMove(target, this)) {
      target.figure = startCell.figure
      startCell.figure.x = target.figure.x
      startCell.figure.y = target.figure.y
      startCell.figure = null
    }
  }

  constructor() {
    this.initCells()
    this.addFigures()
  }
}
