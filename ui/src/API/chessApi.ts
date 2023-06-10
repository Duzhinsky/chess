import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { SessionDto } from "../generated/api"

export const chessApi = createApi({
  reducerPath: "chessApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://w1vvv1w.fvds.ru:81/",
  }),
  endpoints: (build) => ({
    getSession: build.query<SessionDto, any>({
      query: () => ({ url: `session/db5f6aea-22da-4cd3-93b4-885c987a22d0` }),
    }),
  }),
})

export const { useGetSessionQuery } = chessApi
