import React from "react"
import { Modal, Form, Button } from "antd"
import vk_icon from "../icons/vk.svg"

interface Props {
  open: boolean
  onCancel: () => void
}

const AuthModal: React.FC<Props> = ({ open, onCancel }) => {
  //const { toggleAuthModal } = useActions()
  const handleVKAuth = () => {
    // Обработка авторизации через VK
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
