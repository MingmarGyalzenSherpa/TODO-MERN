import { useContext } from "react";
import { UserContext } from "./context/context";
import TodoContainer from "./components/TodoContainer";
import Cookies from "js-cookie";
import { NavLink, useNavigate } from "react-router-dom";
export default function App() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      Cookies.remove("jwt");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <nav>
        <h1>{user}</h1>
        <button onClick={handleClick}>LOGOUT</button>
      </nav>
      <div className="app">
        <TodoContainer />
      </div>
    </>
  );
}
