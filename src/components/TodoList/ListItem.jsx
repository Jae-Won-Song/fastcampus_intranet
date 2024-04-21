import Edit from "../../../public/icon_pen.svg";
import Delete from "../../../public/icon_trash.svg";
import { useState } from "react";

function ListItem({ id, isDone, content, onUpdate, onDelete, onDone }) {
  const [isEditing, setisEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const onChangeCheckbox = () => {
    onUpdate(id, isDone, content);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  const onClickEditButton = () => {
    if (isEditing) {
      onUpdate(id, editedContent);
    }
    setisEditing(!isEditing);
  };

  const onSaveEditedContent = () => {
    onUpdate(id, editedContent);
    setisEditing(false);
  };

  return (
    <div className="ListItem">
      <input
        onChange={() => onDone(id)}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      {isEditing ? (
        <input
          className="ListItem__input"
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          onBlur={onSaveEditedContent}
          autoFocus
        />
      ) : (
        <div className="ListItem__content">{content}</div>
      )}
      <img
        src={Edit}
        className="ListItem__edit"
        alt="Edit"
        onClick={onClickEditButton}
      />
      <img
        onClick={onClickDeleteButton}
        src={Delete}
        className="ListItem__delete"
        alt="Delete"
      />
    </div>
  );
}

export default ListItem;
