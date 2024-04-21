import Editor from "./Editor";
import List from "./List";
import { useState, useEffect } from "react";
import { addDoc, collection, doc, updateDoc, deleteDoc, getDocs, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { firestoreDb } from "../../firebase/config";
import { auth } from "../../firebase/config";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const formatDate = () => {
    return new Date().toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
  }

  useEffect(() => {
    const today = formatDate();

    const unsubscribe = onSnapshot(collection(firestoreDb, 'todolist'), (snapshot) => {
      const newRecords = snapshot.docs
        .map(doc => ({
          id: doc.id,
          content: doc.data().content,
          isDone: doc.data().isDone,
          user: doc.data().user,
          date: doc.data().date,
        }))
        .filter(record => record.user === user?.displayName && record.date === today)
        setTodos(newRecords);
    });
    return () => unsubscribe();
  }, [todos]);

  const onCreate = async (content) => {
    const docRef = await addDoc(collection(firestoreDb, "todolist"), {
      content: content,
      isDone: false,
      user: user?.displayName,
      date: new Date().toLocaleString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    });

    setTodos([
      ...todos,
      {
        id: docRef.id,
        content: content,
        isDone: false,
      },
    ]);
  };

  const onUpdate = (targetId, newContent) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, content: newContent } : todo,
      ),
    );
  };

  const onDelete = async (targetId) => {
    const docRef = doc(firestoreDb, "todolist", targetId);
    await deleteDoc(docRef);

    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  const onDone = async (targetId) => {
    const docRef = doc(firestoreDb, "todolist", targetId);

    const targetTodo = todos.find((todo) => todo.id === targetId);
    if (targetTodo) {
      await updateDoc(docRef, {
        isDone: !targetTodo.isDone,
      });
    }

    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  return (
    <div>
      <Editor onCreate={onCreate} />
      <List
        todos={todos}
        onUpdate={onUpdate}
        onDelete={onDelete}
        onDone={onDone}
      />
    </div>
  );
}

export default TodoList;