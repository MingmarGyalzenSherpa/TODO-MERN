import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoContainer from "./components/TodoContainer.jsx";
import SignUp from "./components/SignUp.jsx";
import "./assets/css/app.css";
import Login from "./components/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/todo",
    element: <App />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
