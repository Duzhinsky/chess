import { createSlice } from "@reduxjs/toolkit"
import { ModalState } from "../../models/Modal"

const initialState: ModalState = {
  turningModal: false,
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleTurningModal: (state) => {
      state.turningModal = !state.turningModal
    },
  },
})
