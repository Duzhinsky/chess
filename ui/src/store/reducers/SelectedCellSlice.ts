import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Position } from "../../models/Position"

interface SelectedCellState {
  selectedCell: Position | null
}

const initialState: SelectedCellState = {
  selectedCell: null,
}

export const selectedCellSlice = createSlice({
  name: "SelectedCell",
  initialState,
  reducers: {
    setSelectedCell: (state, action: PayloadAction<Position | null>) => {
      if (
        state.selectedCell?.x === action.payload?.x &&
        state.selectedCell?.y === action.payload?.y
      ) {
        state.selectedCell = null
      } else {
        state.selectedCell = action.payload
      }
    },
  },
})

export default selectedCellSlice.reducer
