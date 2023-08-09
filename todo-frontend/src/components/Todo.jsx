import editIcon from "../assets/image/edit-icon.svg";
import deleteIcon from "../assets/image/delete-icon.svg";
import { useRef, useState } from "react";
import axios from "axios";
import appConfig from "../../config/appConfig";
export default function Todo({ todo, handleDelete }) {
  const [text, setText] = useState(todo.task);
  const inputRef = useRef(null);
  const handleEdit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      appConfig.base_url + "todo/edit_todo/" + todo._id,
      {
        task: text,
      }
    );
    inputRef.current.disabled = true;
    inputRef.current.blur();
  };

  const onDelete = async () => {
    try {
      const response = await axios.get(
        appConfig.base_url + "todo/delete_todo/" + todo._id
      );
      if (response.status !== 200) throw new Error("Couldn't delete todo");
      handleDelete(todo._id);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onEdit = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const handleText = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="todo">
      <form onSubmit={handleEdit}>
        <input type="hidden" value={todo._id} name="id" />
        <input
          type="text"
          ref={inputRef}
          disabled
          value={text}
          onChange={handleText}
        />
      </form>

      <div className="btn-container">
        <button className="btn" onClick={onEdit}>
          <img src={editIcon} alt="" />
        </button>
        <button className="btn" onClick={onDelete}>
          <img src={deleteIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
