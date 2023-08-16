import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = function (type, e) {
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

  const handleSubmit = () => {};

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form action="">
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
          <button className="login-btn">Login</button>
        </div>
      </form>
    </div>
  );
}
