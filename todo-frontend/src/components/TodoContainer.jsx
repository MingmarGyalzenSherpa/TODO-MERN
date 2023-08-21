import { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import { useEffect } from "react";
import TodoHeader from "./TodoHeader";
import axios from "axios";
import appConfig from "../../config/appConfig";

export default function TodoContainer() {
  const [todos, setTodos] = useState([]);
  const submitNewTodo = (newTodo) => {
    setTodos((todo) => [...todo, newTodo]);
  };

  const handleDelete = (id) => {
    const index = todos.findIndex((todo) => todo._id === id);
    const tempTodos = todos;
    tempTodos.splice(index, 1);

    setTodos([...tempTodos]);
  };

  const fetchTasks = async () => {
    const response = await axios.get(appConfig.base_url + "todo/");
    setTodos(response.data?.todos || []);
  };
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <>
      <TodoHeader />
      <div className="todo-container">
        {todos.map((todo) => (
          <Todo key={todo._id} todo={todo} handleDelete={handleDelete} />
        ))}
        <AddTodo handleSubmit={submitNewTodo} />
        {/* {newTodo && <AddTodo handleClick={handleNewTodo} />} */}
      </div>
    </>
  );
}
