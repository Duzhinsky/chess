import { FC } from "react"
import { Link } from "react-router-dom"
import { useActions } from "../hooks/reduxHooks"
import MyBtn from "./UI/MyBtn"

const Nav: FC = () => {
  const { toggleAuthModal } = useActions()

  const clickHandler = () => {
    toggleAuthModal()
  }

  return (
    <div className="nav">
      <MyBtn
        title={"Login"}
        onClick={() => clickHandler()}
        className={"nav__item"}
      />
      <div>
        <Link className="nav__item" to="/">
          Home
        </Link>
        <Link className="nav__item" to="/game">
          Game
        </Link>
      </div>
    </div>
  )
}

export default Nav
