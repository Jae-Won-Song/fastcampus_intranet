import '../../styles/components/TodoList/Editor.scss';
import Button from '../Button';
import { useState, useRef } from 'react';

function Editor({ onCreate }) {

  const [content, setContent] = useState('');
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === '') {
      contentRef.current.focus();
      return;
    };
    onCreate(content);
    setContent('');
  };

  return (
    <div className='Editor'>
      <div className='todoList_title'>TO DO LIST</div>
      <input
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        placeholder='새로운 Todo...'
      />
      <Button onClick={onSubmit}>추가</Button>
    </div>
  );
};

export default Editor;