// import { useState, useEffect } from "react";
// import { collection, onSnapshot, QuerySnapshot } from "firebase/firestore";
// import { firestoreDb } from "../firebase/config";
// import { auth } from "../firebase/config";

// function RecordOutTime({ isOpen }) {
//   const [recordOutTime, setRecordOutTime] = useState([]);


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

//     const unsubscribe = onSnapshot(collection(firestoreDb, 'recordOutTime'), (snapshot) => {
//       const newRecords = snapshot.docs
//         .map(doc => ({
//           id: doc.id,
//           hour: doc.data().hour,
//           minute: doc.data().minute,
//           user: doc.data().user,
//           date: doc.data().date,
//         }))
//         .filter(record => record.user === user?.displayName && record.date === today)
//         setRecordOutTime(newRecords);
//     });
//     return () => unsubscribe();
//   }, [user]);

//   return (
//     <>
//       <div>
//         {recordOutTime.map((outTime) => (
//           <div className="record__time" key={outTime.id}>
//             {outTime.hour}:
//             {outTime.minute < 10 ? `0${outTime.minute}` : outTime.minute}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default RecordOutTime;