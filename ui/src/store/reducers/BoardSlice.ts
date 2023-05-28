import { createSlice } from "@reduxjs/toolkit"
import { Board } from "../../models/Board"

interface BoardState {
  board: Board
}

const initialState: BoardState = {
  board: new Board(),
}

export const BoardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    createBoard: (state) => {
      state.board = new Board()
    },
  },
})

export default BoardSlice.reducer
