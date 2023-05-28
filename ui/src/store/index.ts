import { configureStore } from "@reduxjs/toolkit"
import BoardSlice from "./reducers/BoardSlice"
import SelectedCellSlice from "./reducers/SelectedCellSlice"
import FelledFigures from "./reducers/FelledFigures"

export const store = configureStore({
  reducer: {
    board: BoardSlice,
    selectedCell: SelectedCellSlice,
    felledFigures: FelledFigures,
  },
  middleware: (gdm) =>
    gdm({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
