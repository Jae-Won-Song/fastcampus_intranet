// import { useState, useEffect } from "react";
// import { collection, onSnapshot, QuerySnapshot } from "firebase/firestore";
// import { firestoreDb } from "../firebase/config";
// import { auth } from "../firebase/config";

// function RecordInTime({ isOpen }) {

//   const [recordInTime, setRecordInTime] = useState([]);

//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });
//     return () => unsubscribe();
//   }, []);

//   const formatDate = () => {
//     return new Date().toLocaleDateString("ko-KR", {
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//     })
//   }

//   useEffect(() => {

//     const today = formatDate();

//     const unsubscribe = onSnapshot(collection(firestoreDb, 'recordInTime'), (snapshot) => {
//       const newRecords = snapshot.docs
//         .map(doc => ({
//           id: doc.id,
//           hour: doc.data().hour,
//           minute: doc.data().minute,
//           user: doc.data().user,
//           date: doc.data().date,
//         }))
//         .filter(record => record.user === user?.displayName && record.date === today)
//         setRecordInTime(newRecords);
//     });
//     return () => unsubscribe();
//   }, [user]);

//   return (
//     <>
//       <div>
//         {recordInTime.map((inTime) => (
//           <div className="record__time" key={inTime.id}>
//                 {inTime.hour > 12 ? inTime.hour - 12 : inTime.hour}
//                 :
//                 {inTime.minute < 10 ? `0${inTime.minute}` : inTime.minute}
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }

// export default RecordInTime;