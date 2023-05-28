import { configureStore } from "@reduxjs/toolkit"
import BoardSlice from "./reducers/BoardSlice"
import SelectedCellSlice from "./reducers/SelectedCellSlice"

export const store = configureStore({
  reducer: {
    board: BoardSlice,
    selectedCell: SelectedCellSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
