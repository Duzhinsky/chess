import { FC } from "react"
import AuthModal from "../components/AuthModal"
import { useActions, useAppSelector } from "../hooks/reduxHooks"
import { selectAuthModal } from "../store/selectors"
import video from "../imgs/bg/bg.mp4"

const Home: FC = () => {
  const visible = useAppSelector(selectAuthModal)
  const { toggleAuthModal } = useActions()

  return (
    <>
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay"></div>
      </div>

      <AuthModal open={visible} onCancel={() => toggleAuthModal()} />
    </>
  )
}

export default Home
