import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import { BoardSlice } from "../store/reducers/BoardSlice"
import { bindActionCreators } from "@reduxjs/toolkit"
import { SelectedCellSlice } from "../store/reducers/SelectedCellSlice"

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const actions = {
  ...BoardSlice.actions,
  ...SelectedCellSlice.actions,
}

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actions, dispatch)
}
