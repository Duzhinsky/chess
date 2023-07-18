import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { MoveDto } from "../../generated/api"
import { TurningState } from "../../models/Turning"

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
