import { useState, useEffect } from "react";
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { firestoreDb } from "../firebase/config";
import { auth } from "../firebase/config";
import Button from "./Button";

function Modal({ isOpen, onSubmit, onClose, children }) {
  if (!isOpen) return null;

  const [user, setUser] = useState(null);
  const [hasRecordedIn, setHasRecordedIn] = useState(false);
  const [hasRecordedOut, setHasRecordedOut] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    checkRecordsForToday(user.displayName).then(({ inRecord, outRecord }) => {
      setHasRecordedIn(inRecord);
      setHasRecordedOut(outRecord);
    });
  }, [user]);

  const checkRecordsForToday = async (displayName) => {
    const today = new Date().toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const qIn = query(
      collection(firestoreDb, "recordInTime"),
      where("user", "==", displayName),
      where("date", "==", today),
    );
    const qOut = query(
      collection(firestoreDb, "recordOutTime"),
      where("user", "==", displayName),
      where("date", "==", today),
    );

    const inSnapshot = await getDocs(qIn);
    const outSnapshot = await getDocs(qOut);
    return {
      inRecord: !inSnapshot.empty,
      outRecord: !outSnapshot.empty,
    };
  };

  const onRecordInOrOut = async (type) => {
    const now = new Date();
    await addDoc(collection(firestoreDb, `record${type}Time`), {
      hour: now.getHours(),
      minute: now.getMinutes(),
      user: user?.displayName,
      date: now.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
    });
    onSubmit();
    onClose();
  };

  const handleClick = async () => {
    if (!hasRecordedIn) {
      await onRecordInOrOut("In");
      setHasRecordedIn(true);
    } else if (!hasRecordedOut) {
      await onRecordInOrOut("Out");
      setHasRecordedOut(true);
    } else {
      alert("오늘은 더이상 입/퇴실을 할 수 없습니다.");
      onClose();
    }

    if (
      isRecordTimeUpdated !== undefined &&
      typeof isRecordTimeUpdated === "function"
    ) {
      isRecordTimeUpdated(true);
    }
  };

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
