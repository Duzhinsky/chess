import { initCells } from "./../../utils/initCells"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { BoardDto, MoveDto, PositionDto, SessionDto } from "../../generated/api"
import { makeFigure } from "../../models/Figure"
import { Cell } from "../../models/Cell"

export interface CellsState {
  cells: Cell[][]
  moves: MoveDto[]
}

export interface UpdateSession {
  session: SessionDto
  position: PositionDto
}

const initialState: CellsState = { cells: initCells(), moves: [] }

export const cellsSlice = createSlice({
  name: "cells",
  initialState,
  reducers: {
    // updateFigures: (state, action: PayloadAction<BoardDto>) => {
    //   state.cells.map((cellRow) => cellRow.map((cell) => (cell.figure = null)))
    //   // eslint-disable-next-line
    //   action.payload.figures.map((figure) => {
    //     state.cells[figure.position.y][figure.position.x].figure = makeFigure(
    //       figure.color,
    //       figure.type
    //     )
    //   })
    // },
    // updateMowves: (state, action: PayloadAction<updateCellProps>) => {
    //   state.cells.map((cellRow) =>
    //     cellRow.map((cell) => {
    //       cell.available = false
    //       cell.moveId = ""
    //     })
    //   )
    //   // eslint-disable-next-line
    //   action.payload.moves.map((move) => {
    //     if (
    //       move.figure.position.x === action.payload.position.x &&
    //       move.figure.position.y === action.payload.position.y
    //     ) {
    //       state.cells[move.to.y][move.to.x].available = true
    //       state.cells[move.to.y][move.to.x].moveId = move.id
    //     }
    //   })
    // },
    // clearMoves: (state) => {
    //   state.cells.map((cellRow) =>
    //     cellRow.map((cell) => {
    //       cell.available = false
    //       cell.moveId = ""
    //     })
    //   )
    // },
    setMoves: (state, action: PayloadAction<MoveDto[]>) => {
      state.moves = action.payload
    },

    updateSession: (state, action: PayloadAction<SessionDto>) => {
      state.cells = initCells()
      action.payload.board.figures.map((figure) => {
        state.cells[figure.position.y][figure.position.x].figure = makeFigure(
          figure.color,
          figure.type
        )
      })
      state.moves = action.payload.possibleMoves
    },

    highlightMoves: (state, action: PayloadAction<PositionDto>) => {
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
export const { updateSession, setMoves } = cellsSlice.actions
export default cellsSlice.reducer
