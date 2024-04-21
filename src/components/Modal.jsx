import Button from "./Button";
import { useState, useEffect } from "react";
import { addDoc, collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { firestoreDb } from "../firebase/config";
import { auth } from "../firebase/config";

let count = 0;

const formatDate = () => {
  return new Date().toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
}

function Modal({ isOpen, onSubmit, onClose, children }) {
  if (!isOpen) return null;

  const [recordInTime, setRecordInTime] = useState(new Date());
  const [recordOutTime, setRecordOutTime] = useState(new Date());
  const [timeRecord, setTimeRecord] = useState([]);
  const [clickCount, setClickCount] = useState(count);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const onRecordIn = async () => {
    const docRef = await addDoc(collection(firestoreDb, "recordInTime"), {
      hour: recordInTime.getHours(),
      minute: recordInTime.getMinutes(),
      user: user?.displayName,
      date: new Date().toLocaleString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    })
    setTimeRecord((prevRecords) => [
      ...prevRecords,
      { hour: recordInTime.getHours(), minute: recordInTime.getMinutes() },
    ]);
  };

  const onRecordOut = async () => {
    const docRef = await addDoc(collection(firestoreDb, "recordOutTime"), {
      hour: recordOutTime.getHours(),
      minute: recordOutTime.getMinutes(),
      user: user?.displayName,
      date: new Date().toLocaleString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    });
    setTimeRecord((prevRecords) => [
      ...prevRecords,
      { hour: recordOutTime.getHours(), minute: recordOutTime.getMinutes() },
    ]);
  };

  const handleClick = async () => {
    const dateFormatted = formatDate();

    const hasInRecord = await checkAlreadyInOut(user.displayName, dateFormatted, "recordInTime");
    if (!hasInRecord) {
      onSubmit();
      onClose();
      onRecordIn();
      return;
    }

    const hasOutRecord = await checkAlreadyInOut(user.displayName, dateFormatted, "recordOutTime");
    if (!hasOutRecord) {
      onSubmit();
      onClose();
      onRecordOut();
      return;
    }
    onClose();
    alert('오늘은 더이상 입/퇴실을 할 수 없습니다.')
  };

  const checkAlreadyInOut = async (userDisplayName, dateFormatted, collectionName) => {
    const q = query(
      collection(firestoreDb, collectionName),
      where('user', '==', userDisplayName),
      where('date', '==', dateFormatted)
    );
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  }


  return (
    <div className="modal">
      <div className="modal__wrapper">
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