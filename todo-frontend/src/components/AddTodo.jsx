import { useRef, useState } from "react";
import axios from "axios";
import appConfig from "../../config/appConfig";
export default function AddTodo({ handleSubmit }) {
  const [todo, setTodo] = useState("");
  const inputRef = useRef(null);
  const fieldClicked = () => {
    setActive(true);
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();
    const response = await axios.post(appConfig.base_url + "todo/add_todo", {
      task: todo,
    });
    handleSubmit(response.data?.todo || {});
    setTodo("");
    setActive(false);
  };
  const [active, setActive] = useState(false);
  return (
    <div className="add-todo" onClick={fieldClicked}>
      <form
        action="
      "
        onSubmit={submit}
      >
        <input
          type="text"
          ref={inputRef}
          onChange={handleChange}
          value={todo}
          placeholder={active ? "" : "+ New Task"}
        />
      </form>
    </div>
  );
}
