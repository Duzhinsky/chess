import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { PositionDto, SessionDto } from "../../generated/api"
import { makeFigure } from "../../models/Figure"
import { CellsState } from "../../models/Cells"
import { initCells } from "./../../utils/initCells"

const initialState: CellsState = { cells: initCells(), moves: [] }

export const cellsSlice = createSlice({
  name: "cells",
  initialState,
  reducers: {
    updateSession: (state, action: PayloadAction<SessionDto>) => {
      state.cells = initCells()
      action.payload.board.figures.forEach((figure) => {
        state.cells[figure.position.y][figure.position.x].figure = makeFigure(
          figure.color,
          figure.type
        )
      })
      state.moves = action.payload.possibleMoves
    },

    highlightMoves: (state, action: PayloadAction<PositionDto>) => {
      state.moves.forEach((move) => {
        const { x, y } = move.figure.position
        const cell = state.cells[move.to.y][move.to.x]

        cell.available =
          x === action.payload.x && y === action.payload.y ? true : false
      })
    },
  },
})

export const { updateSession } = cellsSlice.actions
