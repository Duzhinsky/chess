import { createSlice } from "@reduxjs/toolkit"
import { FigureNames } from "../../models/Figures/Figure"

interface FelledFiguresState {
  white: FigureNames[]
  black: FigureNames[]
}

const initialState: FelledFiguresState = {
  white: [],
  black: [],
}

export const FelledFiguresSlice = createSlice({
  name: "FelledFigures",
  initialState,
  reducers: {},
})

export default FelledFiguresSlice.reducer
