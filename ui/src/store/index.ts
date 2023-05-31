import { configureStore } from "@reduxjs/toolkit"
import SelectedCellSlice from "./reducers/SelectedCellSlice"
import cellsSlice from "./reducers/CellsSlice"

export const store = configureStore({
  reducer: {
    selectedCell: SelectedCellSlice,
    cells: cellsSlice,
  },
  middleware: (gdm) =>
    gdm({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
