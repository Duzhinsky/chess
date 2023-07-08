import { FC } from "react"
import { Link } from "react-router-dom"

const Nav: FC = () => {
  return (
    <div className="nav">
      <Link className="nav__item" to="/auth">
        Login
      </Link>
      <Link className="nav__item" to="/">
        Home
      </Link>
      <Link className="nav__item" to="/game">
        Game
      </Link>
    </div>
  )
}

export default Nav
