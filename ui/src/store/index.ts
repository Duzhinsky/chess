import { configureStore } from "@reduxjs/toolkit"
import selectedCellSlice from "./reducers/SelectedCellSlice"
import cellsSlice from "./reducers/CellsSlice"
import { chessApi } from "../API/chessApi"

export const store = configureStore({
  reducer: {
    selectedCell: selectedCellSlice,
    cells: cellsSlice,
    [chessApi.reducerPath]: chessApi.reducer,
  },
  middleware: (gdm) => gdm().concat(chessApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
