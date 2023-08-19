import { FC } from "react"
import { Link } from "react-router-dom"
import { useActions } from "../hooks/reduxHooks"
import { usePath } from "../hooks/usePath"
import MyBtn from "./UI/MyBtn"

const Nav: FC = () => {
  const { toggleAuthModal } = useActions()

  const clickHandler = () => {
    toggleAuthModal()
  }

  const path = usePath()

  return (
    <div className="nav">
      <MyBtn onClick={() => clickHandler()} className={"nav__item"}>
        Login
      </MyBtn>

      <Link className=" brand" to="/">
        Chess
      </Link>
      {path === "/" ? (
        <Link className="nav__item" to="/game">
          Game
        </Link>
      ) : (
        <Link className="nav__item" to="/">
          Home
        </Link>
      )}
    </div>
  )
}

export default Nav
