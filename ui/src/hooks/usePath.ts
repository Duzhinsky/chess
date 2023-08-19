import { useLocation } from "react-router-dom"

export const usePath = () => {
  const path = useLocation()

  return path.pathname
}
