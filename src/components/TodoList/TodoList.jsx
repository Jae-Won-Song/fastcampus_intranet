import Editor from "./Editor";
import List from "./List";
import "../../styles/components/TodoList/TodoList.scss";
import { useState, useRef } from "react";

const mockData = [
	{
		id: 0,
		isDone: false,
		content: "test 1"
	},
	{
		id: 1,
		isDone: false,
		content: "test 2"
	}
];

function TodoList() {
	const [todos, setTodos] = useState(mockData);
	const idRef = useRef(3);

	const onCreate = content => {
		const newTodo = {
			id: idRef.current++,
			isDone: false,
			content: content
		};

		setTodos([newTodo, ...todos]);
	};

  const onUpdate = (targetId, newContent) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId
          ? { ...todo, content: newContent }
          : todo
        )
    )
  }

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId))
  }

  const onDone = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId
          ? { ...todo, isDone: !todo.isDone }
          : todo
      )
    )
  }


	return (
		<div>
			<Editor onCreate={onCreate} />
			<List todos={todos} onUpdate={onUpdate} onDelete={onDelete} onDone={onDone}/>
		</div>
	);
}

export default TodoList;
