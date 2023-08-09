import { useState } from "react";

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

  const submit = (e) => {
    e.preventDefault();
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
