import Button from "./Button";

function Modal({ isOpen, onSubmit, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__wrapper">
        <div className="modal__wrapper_mark">
          <img src="../../public/xmark.png" onClick={onClose} alt="Xmark" />
        </div>
        <p>{children}</p>
        <div className="modal__wrapper_buttons">
          <Button onClick={onSubmit}>확인</Button>
          <Button color="black" onClick={onClose}>
            취소
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
