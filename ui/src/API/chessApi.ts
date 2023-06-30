import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { MoveDto, SessionDto } from "../generated/api"
import { updateFigures } from "../store/reducers/CellsSlice"

export const chessApi = createApi({
  reducerPath: "chessApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://chess.duzhinsky.ru/api",
    prepareHeaders: (headers: Headers) => {
      headers.set("pid", "123")
      return headers
    },
  }),
  tagTypes: ["figures"],
  endpoints: (build) => ({
    createSession: build.mutation<SessionDto, void>({
      query: () => ({
        url: "session/create",
        method: "POST",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(updateFigures(data.board))
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
          dispatch(updateFigures(data.board))
        } catch (error) {
          console.log(error)
        }
      },
      providesTags: (_) => ["figures"],
    }),

    makeMove: build.mutation<SessionDto, { id: string; move: MoveDto }>({
      query: (p: { id: string; move: MoveDto }) => ({
        url: `session/${p.id}/move`,
        method: "POST",
        body: p.move,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(updateFigures(data.board))
        } catch (error) {
          console.log(error)
        }
      },
      invalidatesTags: ["figures"],
    }),
  }),
})

export const {
  useCreateSessionMutation,
  useGetSessionQuery,
  useMakeMoveMutation,
} = chessApi
