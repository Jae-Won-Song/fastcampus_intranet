import '../styles/components/Modal.scss';
import '../styles/modules/_buttons.scss';
import Xmark from '../../public/icon_xmark.svg';
import Button from './Button';

function Modal({ isOpen, onSubmit, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__wrapper">
        <img src={Xmark} className='modal__wrapper_mark' onClick={onClose}/>
        <p>{children}</p>
        <div className='modal__wrapper_buttons'>
          <Button onClick={onSubmit}>확인</Button>
          <Button color='black' onClick={onClose}>취소</Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;