import React, { useState } from "react";
import axios from "axios";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
axios.defaults.withCredentials = true;
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isLoggedIn = Cookies.get("jwt");
  const navigate = useNavigate();

  const handleChange = function (type, e) {
    switch (type) {
      case "email":
        setEmail(e.target.value);
        break;

      case "password":
        setPassword(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("http://localhost:8000/auth/login", {
        email: email,
        password: password,
      });
      console.log(res);
      navigate("/");
    } catch (error) {
      console.log(error.response.data?.message);
      setError(error.response.data?.message);
    }
  };

  return !isLoggedIn ? (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => handleChange("email", e)}
            value={email}
          />
        </div>
        <div className="input-form">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => handleChange("password", e)}
            value={password}
          />
        </div>
        <p className="error">{error}</p>
        <div className="input-form">
          <button className="login-btn">Login</button>
        </div>
        <p className="to-signup">
          Not registered? <NavLink to="/signup">Sign up</NavLink>
        </p>
      </form>
    </div>
  ) : (
    <Navigate to={"/"}></Navigate>
  );
}
