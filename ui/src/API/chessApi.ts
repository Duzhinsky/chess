import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { SessionDto } from "../generated/api"
import { updateSession } from "../store/reducers/CellsSlice"

export const chessApi = createApi({
  reducerPath: "chessApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://chess.duzhinsky.ru/api/",
    prepareHeaders: (headers: Headers) => {
      headers.set("pid", "123")
      return headers
    },
  }),
  endpoints: (build) => ({
    createSession: build.mutation<SessionDto, void>({
      query: () => ({
        url: "session/create",
        method: "POST",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(updateSession(data))
        } catch (error) {
          console.log(error)
        }
      },
    }),

    getSession: build.query<SessionDto, string>({
      query: (id: string) => ({ url: `session/${id}` }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(updateSession(data))
        } catch (error) {
          console.log(error)
        }
      },
    }),
    makeMove: build.mutation<SessionDto, { id: string; moveId: string }>({
      query: (p: { id: string; moveId: string }) => ({
        url: `session/${p.id}/move`,
        method: "POST",
        params: { moveId: p.moveId },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(updateSession(data))
        } catch (error) {
          console.log(error)
        }
      },
    }),
  }),
})

export const {
  useCreateSessionMutation,
  useLazyGetSessionQuery,
  useMakeMoveMutation,
} = chessApi
