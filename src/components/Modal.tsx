import type { ReactNode } from 'react'

interface ModalProps {
  show: boolean
  title: string
  onClose: () => void
  children: ReactNode
}

function Modal({ show, title, onClose, children }: ModalProps) {
  if (!show) return null

  return (
    <>
      <div className="modal fade show d-block" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Zatvori"
                onClick={onClose}
              />
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary rounded-pill"
                onClick={onClose}
              >
                U redu
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  )
}

export default Modal
