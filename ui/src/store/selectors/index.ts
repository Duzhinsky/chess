import { RootState } from ".."

export const boardSelector = (state: RootState) => state.board.board

export const selectedCellSelector = (state: RootState) =>
  state.selectedCell.selectedCell
