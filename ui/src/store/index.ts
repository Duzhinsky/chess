import { configureStore } from "@reduxjs/toolkit"
import selectedCellSlice from "./reducers/SelectedCellSlice"
import cellsSlice from "./reducers/CellsSlice"
import { chessApi } from "../API/chessApi"
import { authApi } from "../API/authApi"

export const store = configureStore({
  reducer: {
    selectedCell: selectedCellSlice,
    cells: cellsSlice,
    [chessApi.reducerPath]: chessApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (gdm) => gdm().concat(chessApi.middleware, authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
