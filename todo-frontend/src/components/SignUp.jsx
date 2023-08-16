import React, { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

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

  const handleSubmit = () => {};

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form action="">
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

        <div className="input-form">
          <button className="signup-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}
