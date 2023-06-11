import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import { bindActionCreators } from "@reduxjs/toolkit"
import { selectedCellSlice } from "../store/reducers/SelectedCellSlice"
import { cellsSlice } from "../store/reducers/CellsSlice"

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const actions = {
  ...selectedCellSlice.actions,
  ...cellsSlice.actions,
}

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actions, dispatch)
}
