import { FC } from "react"
import AuthModal from "../components/AuthModal"
import { useActions, useAppSelector } from "../hooks/reduxHooks"
import { selectAuthModal } from "../store/selectors"

const Home: FC = () => {
  const visible = useAppSelector(selectAuthModal)
  const { toggleAuthModal } = useActions()

  return (
    <>
      <h1 className="center white">Chess</h1>
      <AuthModal open={visible} onCancel={() => toggleAuthModal()} />
    </>
  )
}

export default Home
