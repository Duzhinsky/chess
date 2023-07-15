import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { AppDispatch, RootState } from "../store"
import { selectedCellSlice } from "../store/reducers/SelectedCellSlice"
import { cellsSlice } from "../store/reducers/CellsSlice"
import { modalSlice } from "../store/reducers/ModalSlice"
import { turningSlice } from "../store/reducers/TurningSlice"

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const actions = {
  ...selectedCellSlice.actions,
  ...cellsSlice.actions,
  ...modalSlice.actions,
  ...turningSlice.actions,
}

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actions, dispatch)
}
