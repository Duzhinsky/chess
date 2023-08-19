import { FC } from "react"

interface MyBtnProps {
  title: string
  onClick: () => void
  [propName: string]: any
}

const MyBtn: FC<MyBtnProps> = ({ title, onClick, ...rest }) => {
  return (
    <button onClick={() => onClick()} {...rest}>
      {title}
    </button>
  )
}

export default MyBtn
