import { useState } from "react";
import axios from "axios";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const isLoggedIn = Cookies.get("jwt");
  const navigate = useNavigate();

  const handleClick = function (type, e) {
    switch (type) {
      case "user_name":
        setName(e.target.value);
        break;

      case "email":
        setEmail(e.target.value);
        break;

      case "password":
        setPassword(e.target.value);
        break;

      case "confirm_password": {
        password != e.target.value
          ? setError("Password doesn't match")
          : setError("");
        setConfirmPassword(e.target.value);
        break;
      }
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("Field can't be empty");
      return;
    }

    if (confirmPassword !== password) {
      setError("Password doesn't match");
      return;
    }
    try {
      const res = await axios.post("http://localhost:8000/auth/signup", {
        user_name: name,
        email: email,
        password: password,
      });
      navigate("/login");
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data?.message);
    }
  };

  return !isLoggedIn ? (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-form">
          <label htmlFor="user_name">User Name</label>
          <input
            type="text"
            name="user_name"
            onChange={(e) => handleClick("user_name", e)}
            value={name}
          />
        </div>
        <div className="input-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => handleClick("email", e)}
            value={email}
          />
        </div>
        <div className="input-form">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => handleClick("password", e)}
            value={password}
          />
        </div>
        <div className="input-form">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            onChange={(e) => handleClick("confirm_password", e)}
            value={confirmPassword}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="input-form to-login">
          Already a member? <NavLink to={"/login"}>Login</NavLink>
        </div>
        <div className="input-form">
          <button className="signup-btn">Submit</button>
        </div>
      </form>
    </div>
  ) : (
    <Navigate to={"/"} />
  );
}
