import { useEffect } from "react";
import { useNavigate, useLoaderData, Navigate } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import appConfig from "../../config/appConfig";

export async function loader() {
  try {
    const res = await axios.get(`${appConfig.base_url}verify_user`);
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
