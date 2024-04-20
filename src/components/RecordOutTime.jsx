import { useState, useEffect } from "react";
import { collection, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { firestoreDb } from "../firebase/config";

function RecordOutTime({ isOpen }) {

  const [recordOutTime, setRecordOutTime] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestoreDb, 'recordOutTime'), (snapshot) => {
      const newRecords = snapshot.docs.map(doc => ({
        id: doc.id,
        hour: doc.data().hour,
        minute: doc.data().minute,
      }));
      setRecordOutTime(newRecords);
    });
    return () => unsubscribe();
  }, [isOpen]);

  return (
    <>
      <div>
        {recordOutTime.map((outTime) => (
            <div className="record__time" key={outTime.id}>
              {outTime.hour}:{outTime.minute}
            </div>
            ))}
      </div>
    </>
  )
}

export default RecordOutTime;