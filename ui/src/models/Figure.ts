import { Colors } from "./Colors"
import whitePawn from "../figures/whitePawn.svg"
import blackPawn from "../figures/blackPawn.svg"
import whiteRook from "../figures/whiteRook.svg"
import blackRook from "../figures/blackRook.svg"
import whiteKnight from "../figures/whiteKnight.svg"
import blackKnight from "../figures/blackKnight.svg"
import whiteBishop from "../figures/whiteBishop.svg"
import blackBishop from "../figures/blackBishop.svg"
import whiteQueen from "../figures/whiteQueen.svg"
import blackQueen from "../figures/blackQueen.svg"
import whiteKing from "../figures/whiteKing.svg"
import blackKing from "../figures/blackKing.svg"

type ColorMap = {
  [key in Colors]: string
}

type IconMap = {
  [key in FigureType]: ColorMap
}

export enum FigureType {
  PAWN = "PAWN",
  ROOK = "ROOK",
  KNIGHT = "KNIGHT",
  BISHOP = "BISHOP",
  QUEEN = "QUEEN",
  KING = "KING",
}

const figureIcons: IconMap = {
  [FigureType.PAWN]: {
    [Colors.WHITE]: whitePawn,
    [Colors.BLACK]: blackPawn,
  },
  [FigureType.ROOK]: {
    [Colors.WHITE]: whiteRook,
    [Colors.BLACK]: blackRook,
  },
  [FigureType.KNIGHT]: {
    [Colors.WHITE]: whiteKnight,
    [Colors.BLACK]: blackKnight,
  },
  [FigureType.BISHOP]: {
    [Colors.WHITE]: whiteBishop,
    [Colors.BLACK]: blackBishop,
  },
  [FigureType.QUEEN]: {
    [Colors.WHITE]: whiteQueen,
    [Colors.BLACK]: blackQueen,
  },
  [FigureType.KING]: {
    [Colors.WHITE]: whiteKing,
    [Colors.BLACK]: blackKing,
  },
}

export class Figure {
  icon: any
  color: Colors

  constructor(color: Colors, type: FigureType) {
    this.color = color
    this.icon = figureIcons[type][color]
  }
}
