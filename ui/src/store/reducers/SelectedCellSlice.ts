import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Cell } from "../../models/Cell"

interface SelectedCellState {
  selectedCell: Cell | null
}

const initialState: SelectedCellState = {
  selectedCell: null,
}

export const SelectedCellSlice = createSlice({
  name: "SelectedCell",
  initialState,
  reducers: {
    setSelectedCell: (state, action: PayloadAction<Cell | null>) => {
      state.selectedCell = action.payload
    },
  },
})

export default SelectedCellSlice.reducer
