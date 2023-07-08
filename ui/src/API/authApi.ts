import { fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { createApi } from "@reduxjs/toolkit/dist/query/react/"
import { LoginRequest } from "../models"

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://chess.duzhinsky.ru/",
  }),
  endpoints: (build) => ({
    login: build.mutation<any, any>({
      query: (req) => ({
        url: "auth/token",
        method: "POST",
        body: new URLSearchParams(req).toString(),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),
  }),
})

export const { useLoginMutation } = authApi
