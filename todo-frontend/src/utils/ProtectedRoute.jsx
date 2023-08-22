import { useLoaderData, Navigate } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import appConfig from "../../config/appConfig";
import { UserContext } from "../context/context";
export async function loader() {
  try {
    const res = await axios.get(`${appConfig.base_url}auth/verify_user`);
    console.log(res);
    return { status: res.status, user: res.data.user_name };
  } catch (error) {
    console.log(error);
    return { status: error.response.status };
  }
}

export default function ProtectedRoute({ children }) {
  const data = useLoaderData();
  console.log(data);
  if (data.status !== 200) {
    Cookie.remove("jwt");
  }

  return data.status === 200 ? (
    <UserContext.Provider value={data.user}>{children}</UserContext.Provider>
  ) : (
    <Navigate to={"/login"}></Navigate>
  );
}
