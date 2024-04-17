import "../../styles/components/TodoList/List.scss";
import ListItem from "./ListItem";

function List({ todos, onUpdate, onDelete, onDone }) {
	return (
		<div className="todo__wrapper">
			{todos.map(todo => {
				return (
					<ListItem
						key={todo.id}
						{...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
            onDone={onDone}
					/>
				);
			})}
		</div>
	);
}

export default List;
