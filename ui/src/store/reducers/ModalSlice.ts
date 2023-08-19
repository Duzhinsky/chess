import { createSlice } from "@reduxjs/toolkit"
import { ModalState } from "../../models/Modal"

const initialState: ModalState = {
  authModal: false,
  turningModal: false,
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleAuthModal: (state) => {
      state.authModal = !state.authModal
    },
    toggleTurningModal: (state) => {
      state.turningModal = !state.turningModal
    },
  },
})
