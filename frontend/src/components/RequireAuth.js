import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRefreshToken from "../hooks/useRefreshToken";
function RequireAuth() {
  const { auth } = useAuth();
  const location = useLocation();
  const refresh = useRefreshToken();

  // if (!auth.accessToken) refresh();

  return auth?.accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;
