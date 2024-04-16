import '../../styles/components/TodoList/List.scss';
import ListItem from './ListItem';

function List({ todos }) {
  return (
    <div className='todo__wrapper'>
      {todos.map((todo) => {
        return <ListItem key={todo.id} {...todo} />
      })};
    </div>
  );
};

export default List;