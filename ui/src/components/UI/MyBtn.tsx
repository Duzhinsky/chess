import { FC } from "react"
import { MyBtnProps } from "../../models/UI"

const MyBtn: FC<MyBtnProps> = ({ title, onClick, ...rest }) => {
  return (
    <button onClick={() => onClick()} {...rest}>
      {title}
    </button>
  )
}

export default MyBtn
