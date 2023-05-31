import { RootState } from ".."

export const selectedCellSelector = (state: RootState) =>
  state.selectedCell.selectedCell
