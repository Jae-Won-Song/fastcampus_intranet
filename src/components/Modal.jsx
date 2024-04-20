import Button from "./Button";
import "../styles/components/Modal.scss";
import { useState, useEffect } from "react";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { firestoreDb } from "../firebase/config";

let count = 0;

function Modal({ isOpen, onSubmit, onClose, children }) {
  if (!isOpen) return null;
  
  const [recordInTime, setRecordInTime] = useState(new Date());
  const [recordOutTime, setRecordOutTime] = useState(new Date());
  const [timeRecord, setTimeRecord] = useState([]);
  const [clickCount, setClickCount] = useState(count);

  const onRecordIn = async () => {
    const docRef = await addDoc(collection(firestoreDb, 'recordInTime'), {
      hour: recordInTime.getHours(),
      minute: recordInTime.getMinutes(),
    });
    setTimeRecord(prevRecords => [...prevRecords, {hour: recordInTime.getHours(), minute: recordInTime.getMinutes()}]);
  };

  const onRecordOut = async () => {
    const docRef = await addDoc(collection(firestoreDb, 'recordOutTime'), {
      hour: recordOutTime.getHours(),
      minute: recordOutTime.getMinutes(),
    });
    setTimeRecord(prevRecords => [...prevRecords, {hour: recordOutTime.getHours(), minute: recordOutTime.getMinutes()}]);
  };

  const handleClick = () => {
console.log(count)
    if (count === 0) {
      onSubmit();
      onClose();
      onRecordIn();
    } else if (count === 1) {
      onSubmit();
      onClose();
      onRecordOut();
    } else {
      onClose();
    }
    setClickCount(count += 1);
    console.log(count)
  }

  return (
    <div className="modal">
      <div className="modal__wrapper">
        <div className="modal__wrapper_mark">
          <img src="../../public/xmark.png" onClick={onClose} alt="Xmark" />
        </div>
        <p className="modal__wrapper_p">{children}</p>
        <div className="modal__wrapper_buttons">
          <Button onClick={handleClick}>확인</Button>
          <Button color="black" onClick={onClose}>
            취소
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
