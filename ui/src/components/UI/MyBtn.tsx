import { FC } from "react"
import { MyBtnProps } from "../../models/UI"

const MyBtn: FC<MyBtnProps> = ({ children, onClick, ...rest }) => {
  return (
    <button onClick={() => onClick()} {...rest}>
      {children}
    </button>
  )
}

export default MyBtn
