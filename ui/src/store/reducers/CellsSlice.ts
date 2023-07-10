import { initCells } from "./../../utils/initCells"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { PositionDto, SessionDto } from "../../generated/api"
import { makeFigure } from "../../models/Figure"
import { CellsState } from "../../models"

const initialState: CellsState = { cells: initCells(), moves: [] }

export const cellsSlice = createSlice({
  name: "cells",
  initialState,
  reducers: {
    updateSession: (state, action: PayloadAction<SessionDto>) => {
      state.cells = initCells()
      //eslint-disable-next-line
      action.payload.board.figures.map((figure) => {
        state.cells[figure.position.y][figure.position.x].figure = makeFigure(
          figure.color,
          figure.type
        )
      })
      state.moves = action.payload.possibleMoves
    },

    highlightMoves: (state, action: PayloadAction<PositionDto>) => {
      //eslint-disable-next-line
      state.moves.map((move) => {
        if (
          move.figure.position.x === action.payload.x &&
          move.figure.position.y === action.payload.y
        ) {
          state.cells[move.to.y][move.to.x].available =
            !state.cells[move.to.y][move.to.x].available
        } else {
          state.cells[move.to.y][move.to.x].available = false
        }
      })
    },
  },
})

export const { updateSession } = cellsSlice.actions
