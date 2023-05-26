import { Cell } from "./Cell"
import { Colors } from "./Colors"
import { Bishop } from "./Figures/Bishop"
import { Figure, FigureNames } from "./Figures/Figure"
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

  private setCell(figure: Figure, coords: [number, number]) {
    return (this.getCell(...coords).figure = figure)
  }

  private addPawns() {
    for (let x = 0; x < 8; x++) {
      this.setCell(new Pawn(Colors.WHITE, FigureNames.PAWN), [x, 6])
      this.setCell(new Pawn(Colors.BLACK, FigureNames.PAWN), [x, 1])
    }
  }

  private addRooks() {
    this.setCell(new Rook(Colors.BLACK, FigureNames.ROOK), [0, 0])
    this.setCell(new Rook(Colors.BLACK, FigureNames.ROOK), [7, 0])

    this.setCell(new Rook(Colors.WHITE, FigureNames.ROOK), [0, 7])
    this.setCell(new Rook(Colors.WHITE, FigureNames.ROOK), [7, 7])
  }

  private addKnights() {
    this.setCell(new Knight(Colors.BLACK, FigureNames.KNIGHT), [1, 0])
    this.setCell(new Knight(Colors.BLACK, FigureNames.KNIGHT), [6, 0])

    this.setCell(new Knight(Colors.WHITE, FigureNames.KNIGHT), [1, 7])
    this.setCell(new Knight(Colors.WHITE, FigureNames.KNIGHT), [6, 7])
  }

  private addBishops() {
    this.setCell(new Bishop(Colors.BLACK, FigureNames.BISHOP), [2, 0])
    this.setCell(new Bishop(Colors.BLACK, FigureNames.BISHOP), [5, 0])

    this.setCell(new Bishop(Colors.WHITE, FigureNames.BISHOP), [2, 7])
    this.setCell(new Bishop(Colors.WHITE, FigureNames.BISHOP), [5, 7])
  }

  private addQueens() {
    this.setCell(new Queen(Colors.BLACK, FigureNames.QUEEN), [3, 0])

    this.setCell(new Queen(Colors.WHITE, FigureNames.QUEEN), [3, 7])
  }

  private addKings() {
    this.setCell(new King(Colors.BLACK, FigureNames.KING), [4, 0])
    this.setCell(new King(Colors.WHITE, FigureNames.KING), [4, 7])
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
