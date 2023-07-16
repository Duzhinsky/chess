import { configureStore } from "@reduxjs/toolkit"
import { chessApi } from "../API/chessApi"
import { selectedCellSlice } from "./reducers/SelectedCellSlice"
import { cellsSlice } from "./reducers/CellsSlice"
import { modalSlice } from "./reducers/ModalSlice"
import { turningSlice } from "./reducers/TurningSlice"

export const store = configureStore({
  reducer: {
    [selectedCellSlice.name]: selectedCellSlice.reducer,
    [cellsSlice.name]: cellsSlice.reducer,
    [chessApi.reducerPath]: chessApi.reducer,
    [modalSlice.name]: modalSlice.reducer,
    [turningSlice.name]: turningSlice.reducer,
  },
  middleware: (gdm) => gdm().concat(chessApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
