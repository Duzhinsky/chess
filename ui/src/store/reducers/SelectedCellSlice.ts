import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { PositionDto } from "../../generated/api"
import { SelectedCellState } from "../../models/Cell"

const initialState: SelectedCellState = {
  selectedCell: null,
}

export const selectedCellSlice = createSlice({
  name: "selectedCell",
  initialState,
  reducers: {
    setSelectedCell: (state, action: PayloadAction<PositionDto | null>) => {
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
