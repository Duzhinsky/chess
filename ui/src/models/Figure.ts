import { Color, FigureType } from "../generated/api"
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
  [key in Color]: string
}

type IconMap = {
  [key in FigureType]: ColorMap
}

const figureIcons: IconMap = {
  [FigureType.PAWN]: {
    [Color.WHITE]: whitePawn,
    [Color.BLACK]: blackPawn,
  },
  [FigureType.ROCK]: {
    [Color.WHITE]: whiteRook,
    [Color.BLACK]: blackRook,
  },
  [FigureType.KNIGHT]: {
    [Color.WHITE]: whiteKnight,
    [Color.BLACK]: blackKnight,
  },
  [FigureType.BISHOP]: {
    [Color.WHITE]: whiteBishop,
    [Color.BLACK]: blackBishop,
  },
  [FigureType.QUEEN]: {
    [Color.WHITE]: whiteQueen,
    [Color.BLACK]: blackQueen,
  },
  [FigureType.KING]: {
    [Color.WHITE]: whiteKing,
    [Color.BLACK]: blackKing,
  },
}

export interface Figure {
  icon: any
  color: Color
}

export const makeFigure = (color: Color, type: FigureType): Figure => ({
  icon: figureIcons[type][color],
  color,
})
