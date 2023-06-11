import { initCells } from "./../../utils/initCells"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { CellProps } from "../../components/Cell"
import { BoardDto } from "../../generated/api"
import { makeFigure } from "../../models/Figure"

export interface CellsState {
  cells: CellProps[][]
}

const initialState: CellsState = { cells: initCells() }

export const cellsSlice = createSlice({
  name: "cells",
  initialState,
  reducers: {
    updateFigures: (state, action: PayloadAction<BoardDto>) => {
      action.payload.figures.map(
        (figure) =>
          (state.cells[figure.position.y][figure.position.x].figure =
            makeFigure(figure.color, figure.type))
      )
    },
  },
})
export const { updateFigures } = cellsSlice.actions
export default cellsSlice.reducer
