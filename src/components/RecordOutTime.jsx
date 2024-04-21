import { useState, useEffect } from "react";
import { query, collection, where, onSnapshot } from "firebase/firestore";
import { firestoreDb } from "../firebase/config";
import { auth } from "../firebase/config";

function RecordOutTime() {
  const [recordOutTime, setRecordOutTime] = useState([]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    const today = new Date().toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const q = query(
      collection(firestoreDb, "recordOutTime"),
      where("user", "==", user.displayName),
      where("date", "==", today)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newRecords = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecordOutTime(newRecords);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <div>
      {recordOutTime.map((outTime) => (
        <div className="record__time" key={outTime.id}>
          {outTime.hour}:
          {outTime.minute < 10 ? `0${outTime.minute}` : outTime.minute}
        </div>
      ))}
    </div>
  );
}

export default RecordOutTime;