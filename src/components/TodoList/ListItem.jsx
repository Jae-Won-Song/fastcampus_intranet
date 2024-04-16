import Edit from '../../../public/icon_pen.svg';
import Delete from '../../../public/icon_trash.svg';
import '../../styles/components/TodoList/ListItem.scss';

function ListItem({ id, isDone, content}) {
  return (
    <div className='ListItem'>
      <input readOnly checked={isDone} type='checkbox' />
      <div className='ListItem__content'>{content}</div>
      <img src={Edit} className='ListItem__edit' />
      <img src={Delete} className='ListItem__delete'/>
    </div>
  );
};

export default ListItem;