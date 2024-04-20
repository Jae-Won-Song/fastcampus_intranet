import { useState, useEffect } from "react";
import { collection, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { firestoreDb } from "../firebase/config";

function RecordInTime({ isOpen }) {

  const [recordInTime, setRecordInTime] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestoreDb, 'recordInTime'), (snapshot) => {
      const newRecords = snapshot.docs.map(doc => ({
        id: doc.id,
        hour: doc.data().hour,
        minute: doc.data().minute,
      }));
      setRecordInTime(newRecords);
    });
    return () => unsubscribe();
  }, [isOpen]);

  return (
    <>
      <div>
        {recordInTime.map((inTime) => (
          <div className="record__time" key={inTime.id}>
                {inTime.hour}:{inTime.minute}
          </div>
        ))}
      </div>
    </>
  )
}

export default RecordInTime;