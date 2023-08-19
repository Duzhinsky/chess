export interface AuthState {
  isAuth: boolean
}

export const LSisAuth = "chess/isAuth"

export interface LoginRequest {
  grant_type: string
  scope: string
  client_id: string
  client_secret: string
  username: string
  password: string
}
