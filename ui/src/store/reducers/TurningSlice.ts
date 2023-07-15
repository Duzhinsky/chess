import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TurningState } from "../../models"
import { MoveDto } from "../../generated/api"

const initialState: TurningState = {
  moves: [],
}

export const turningSlice = createSlice({
  name: "turning",
  initialState,
  reducers: {
    setMoves: (state, action: PayloadAction<MoveDto[]>) => {
      state.moves = action.payload
    },
  },
})
