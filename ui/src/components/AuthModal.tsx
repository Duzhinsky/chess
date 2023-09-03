import { FC } from "react"
import { Modal, Form, Button } from "antd"
import { useOAuth2 } from "@tasoskakour/react-use-oauth2"
import vk_icon from "../imgs/icons/vk.svg"
import { AuthModalProps } from "../models/Modal"

const AuthModal: FC<AuthModalProps> = ({ open, onCancel }) => {
  const { data, loading, error, getAuth, logout } = useOAuth2({
    authorizeUrl: "https://oauth.vk.com/authorize",
    clientId: "51731397",
    redirectUri: `http://chess.duzhinsky.ru/login`,
    scope: "email",
    responseType: "code",
    exchangeCodeForTokenServerURL: "https://your-backend/token",
    exchangeCodeForTokenMethod: "POST",
    onSuccess: (payload) => console.log("Success", payload),
    onError: (error_) => console.log("Error", error_),
  })

  const isLoggedIn = Boolean(data?.access_token)

  //const { toggleAuthModal } = useActions()
  const handleVKAuth = () => {
    console.log("Submit")
    getAuth()
    // await Обработка авторизации через VK
    // Если всё ок toggleAuthModal()
  }

  return (
    <Modal open={open} onCancel={onCancel} footer={null}>
      <Form onFinish={handleVKAuth}>
        <Form.Item style={{ display: "flex", justifyContent: "center" }}>
          <img src={vk_icon} alt="auth with vk" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Войти через ВКонтакте
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AuthModal
