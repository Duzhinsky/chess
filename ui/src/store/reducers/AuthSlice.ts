import { createSlice } from "@reduxjs/toolkit"
import { AuthState, LSisAuth } from "../../models"

const initialState: AuthState = {
  isAuth: JSON.parse(localStorage.getItem(LSisAuth) || "") || false,
}

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
})
