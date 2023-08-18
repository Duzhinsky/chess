import { Input, Checkbox, Button, Form } from "antd"
import { FC } from "react"
import { useLoginMutation } from "../API/authApi"
import { LoginRequest } from "../models"
import vk_icon from "../icons/vk.svg"

const Auth: FC = () => {
  const [login] = useLoginMutation()

  const onFinish = (values: any) => {
    const req: LoginRequest = {
      grant_type: "",
      scope: "",
      client_id: "",
      client_secret: "",
      username: "",
      password: "",
    }
    console.log(req)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo)
  }

  return (
    <div className="page" style={{ flexDirection: "column" }}>
      <h1 className="auth__title">Chess</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="auth white"
      >
        <Form.Item
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div>Login with:</div>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <img src={vk_icon} alt="auth with vk" />
          </a>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Auth
