import editIcon from "../assets/image/edit-icon.svg";
import deleteIcon from "../assets/image/delete-icon.svg";
import { useRef, useState } from "react";
export default function Todo({ task, handleEdit, handleDelete }) {
  const [text, setText] = useState(task);
  const [disable, setDisable] = useState(true);
  const inputRef = useRef(null);
  const onEdit = (e) => {
    e.preventDefault();
    setDisable(false);
    inputRef.current.disabled = false;
    inputRef.current.focus();
    handleEdit();
  };

  const handleText = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="todo">
      {" "}
      <input
        type="text"
        ref={inputRef}
        disabled
        value={text}
        onChange={handleText}
      />
      <div className="btn-container">
        <button className="btn" onClick={onEdit}>
          <img src={editIcon} alt="" />
        </button>
        <button className="btn">
          <img src={deleteIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
