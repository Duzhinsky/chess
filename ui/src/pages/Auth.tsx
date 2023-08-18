import { Input, Checkbox, Button, Form } from "antd"
import { FC } from "react"
import { useLoginMutation } from "../API/authApi"
import { LoginRequest } from "../models"

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
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Auth
