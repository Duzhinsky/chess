import { Cell } from "./Cell"
import { Colors } from "./Colors"
import { Bishop } from "./Figures/Bishop"
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
          row.push(new Cell(j, i, Colors.BLACK, this, null))
        } else {
          row.push(new Cell(j, i, Colors.WHITE, this, null))
        }
      }
      this.cells.push(row)
    }
  }

  private getCell(x: number, y: number) {
    return this.cells[y][x] // x - column | y - row
  }

  private addPawns() {
    for (let x = 0; x < 8; x++) {
      new Pawn(Colors.BLACK, this.getCell(x, 1))
      new Pawn(Colors.WHITE, this.getCell(x, 6))
    }
  }

  private addRooks() {
    new Rook(Colors.BLACK, this.getCell(0, 0))
    new Rook(Colors.BLACK, this.getCell(7, 0))

    new Rook(Colors.WHITE, this.getCell(0, 7))
    new Rook(Colors.WHITE, this.getCell(7, 7))
  }

  private addKnights() {
    new Knight(Colors.BLACK, this.getCell(1, 0))
    new Knight(Colors.BLACK, this.getCell(6, 0))

    new Knight(Colors.WHITE, this.getCell(1, 7))
    new Knight(Colors.WHITE, this.getCell(6, 7))
  }

  private addBishops() {
    new Bishop(Colors.BLACK, this.getCell(2, 0))
    new Bishop(Colors.BLACK, this.getCell(5, 0))

    new Bishop(Colors.WHITE, this.getCell(2, 7))
    new Bishop(Colors.WHITE, this.getCell(5, 7))
  }

  private addQueens() {
    new Queen(Colors.BLACK, this.getCell(3, 0))

    new Queen(Colors.WHITE, this.getCell(3, 7))
  }

  private addKings() {
    new King(Colors.BLACK, this.getCell(4, 0))

    new King(Colors.WHITE, this.getCell(4, 7))
  }

  private addFigures() {
    this.addPawns()
    this.addRooks()
    this.addKnights()
    this.addBishops()
    this.addQueens()
    this.addKings()
  }

  constructor() {
    this.initCells()
    this.addFigures()
  }
}
