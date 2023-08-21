import { useEffect } from "react";
import { useNavigate, useLoaderData, Navigate } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";

export async function loader() {
  try {
    const res = await axios.get("http://localhost:8000/auth/verify_user");
    return res.status;
  } catch (error) {
    return error.response.status;
  }
}

export default function ProtectedRoute({ children }) {
  const status = useLoaderData();
  if (status !== 200) {
    Cookie.remove("jwt");
  }

  return status === 200 ? children : <Navigate to={"/login"}></Navigate>;
}
