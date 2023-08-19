import { RootState } from ".."

export const selectedCellSelector = (state: RootState) =>
  state.selectedCell.selectedCell

export const selectTurningMoves = (state: RootState) => state.turning.moves

export const selectAuthModal = (state: RootState) => state.modal.authModal
