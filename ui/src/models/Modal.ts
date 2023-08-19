export interface ModalState {
  authModal: boolean
  turningModal: boolean
}

export interface AuthModalProps {
  open: boolean
  onCancel: () => void
}
