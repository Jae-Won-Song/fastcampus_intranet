import Editor from "./Editor";
import List from "./List";
import "../../styles/components/TodoList/TodoList.scss";
import { useState, useEffect } from "react";
import { addDoc, collection, doc, updateDoc, deleteDoc, getDocs, QuerySnapshot } from "firebase/firestore";
import { firestoreDb } from "../../firebase/config";


function TodoList() {
	const [todos, setTodos] = useState([]);

	useEffect(() => { 
		getDocs(collection(firestoreDb, 'todolist')).then((querySnapshot) => {
			const firestoreTodoItemList = [];
			querySnapshot.forEach((doc) => {
				firestoreTodoItemList.push({
					id: doc.id,
					content: doc.data().content,
					isDone: doc.data().isDone,
				})
			});
			setTodos(firestoreTodoItemList);
		});
	}, []);

	const onCreate = async (content) => {

		const docRef = await addDoc(collection(firestoreDb, 'todolist'), {
			content: content,
			isDone: false,
		});

		setTodos([...todos, {
			id: docRef.id,
			content: content,
			isDone: false
		}]);
	};

  const onUpdate = (targetId, newContent) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, content: newContent } : todo,
      ),
    );
  };

	const onDelete = async (targetId) => {
		const docRef = doc(firestoreDb, 'todolist', targetId);
		await deleteDoc(docRef)

		setTodos(todos.filter(todo => todo.id !== targetId));
	};

	const onDone = async (targetId) => {
		const docRef = doc(firestoreDb, 'todolist', targetId);

		const targetTodo = todos.find(todo => todo.id === targetId);
		if (targetTodo) {
			await updateDoc(docRef, {
				isDone: !targetTodo.isDone
			});
		}

		setTodos(
			todos.map(todo =>
				todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
			)
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
