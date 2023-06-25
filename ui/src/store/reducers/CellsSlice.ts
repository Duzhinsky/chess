import { initCells } from "./../../utils/initCells"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { BoardDto, MoveDto, PositionDto } from "../../generated/api"
import { makeFigure } from "../../models/Figure"
import { Cell } from "../../models/Cell"

export interface CellsState {
  cells: Cell[][]
}

export interface updateCellProps {
  moves: MoveDto[]
  position: PositionDto
}

const initialState: CellsState = { cells: initCells() }

export const cellsSlice = createSlice({
  name: "cells",
  initialState,
  reducers: {
    updateFigures: (state, action: PayloadAction<BoardDto>) => {
      // eslint-disable-next-line
      action.payload.figures.map((figure) => {
        state.cells[figure.position.y][figure.position.x].figure = makeFigure(
          figure.color,
          figure.type
        )
      })
    },
    updateMoves: (state, action: PayloadAction<updateCellProps>) => {
      state.cells.map((cellRow) =>
        cellRow.map((cell) => (cell.available = false))
      )
      // eslint-disable-next-line
      action.payload.moves.map((move) => {
        if (
          move.figure.position.x === action.payload.position.x &&
          move.figure.position.y === action.payload.position.y
        )
          state.cells[move.to.y][move.to.x].available = true
      })
    },
    clearMoves: (state) => {
      state.cells.map((cellRow) =>
        cellRow.map((cell) => (cell.available = false))
      )
    },
  },
})
export const { updateFigures } = cellsSlice.actions
export default cellsSlice.reducer
