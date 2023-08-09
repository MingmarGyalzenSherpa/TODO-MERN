import { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import { useEffect } from "react";

export default function TodoContainer() {
  const [tasks, setTasks] = useState([]);
  console.log(...tasks);
  const submitNewTodo = (newTask) => {
    console.log("new task" + newTask);
    setTasks((task) => [...task, newTask]);
  };

  const handleEdit = () => {
    console.log("edit");
  };

  const handleDelete = () => {
    console.log("delete");
  };
  const data = [
    { id: 1, task: "12" },
    { id: 2, task: "2323" },
  ];

  useEffect(() => {
    setTasks(data);
  }, []);
  return (
    <div className="todo-container">
      {tasks.map(({ id, task }) => (
        <Todo
          key={id}
          task={task}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
      <AddTodo handleSubmit={submitNewTodo} />
      {/* {newTodo && <AddTodo handleClick={handleNewTodo} />} */}
    </div>
  );
}
