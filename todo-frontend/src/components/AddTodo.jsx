import { useState } from "react";
import axios from "axios";
import appConfig from "../../config/appConfig";
export default function AddTodo({ handleSubmit }) {
  const fieldClicked = () => {
    setActive(true);
  };

  const [todo, setTodo] = useState("");
  console.log("todo = " + todo);
  const handleChange = (e) => {
    setTodo(e.target.value);
    console.log(todo);
  };

  const submit = async (e) => {
    e.preventDefault();
    const response = await axios.post(appConfig.base_url + "todo/add_todo", {
      task: todo,
    });
    console.log(response);
    handleSubmit({ id: 20, task: todo });

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
          onChange={handleChange}
          value={todo}
          placeholder={active ? "" : "+ New Task"}
          // onSubmit={submit}
        />
      </form>
    </div>
  );
}
