import { useState, useEffect } from "react";
import { query, collection, where, onSnapshot } from "firebase/firestore";
import { firestoreDb } from "../firebase/config";
import { auth } from "../firebase/config";

function RecordInTime() {
  const [recordInTime, setRecordInTime] = useState([]);
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
      collection(firestoreDb, "recordInTime"),
      where("user", "==", user.displayName),
      where("date", "==", today),
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newRecords = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecordInTime(newRecords);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <div>
      {recordInTime.map((inTime) => (
        <div className="record__time" key={inTime.id}>
          {inTime.hour}:
          {inTime.minute < 10 ? `0${inTime.minute}` : inTime.minute}
        </div>
      ))}
    </div>
  );
}

export default RecordInTime;
