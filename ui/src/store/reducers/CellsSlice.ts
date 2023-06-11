import { initCells } from "./../../utils/initCells"
import { createSlice } from "@reduxjs/toolkit"
import { CellProps } from "../../components/Cell"

export interface CellsState {
  cells: CellProps[][]
}

const initialState: CellsState = { cells: initCells() }

export const cellsSlice = createSlice({
  name: "cells",
  initialState,
  reducers: {},
})

export default cellsSlice.reducer
