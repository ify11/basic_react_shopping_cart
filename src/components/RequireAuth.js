import useAuth from "./context/hooks/useAuth"
import { Outlet, Navigate, useLocation } from "react-router-dom";

const RequireAuth = () => {
    const {state:{loggedin}}=useAuth();
    const location=useLocation();

  return (
    loggedin
    ?<Outlet/>
    :<Navigate to="/login" state={{from: location}} replace/>
  )
}

export default RequireAuth