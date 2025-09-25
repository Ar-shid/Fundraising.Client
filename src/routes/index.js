import { Navigate } from "react-router-dom";
import PublicRoutes from "./section/PublicRoutes";
import PrivateRoutes from "./section/PrivateRoutes";
import { jwtDecode } from "jwt-decode";

const getUserRole = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded?.given_name || null;
  } catch (e) {
    return null;
  }
};

// Route Wrappers
const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/" replace /> : children;
};

// 🔹 Private Route (with role check)
const PrivateRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" replace />;

  const role = getUserRole();

  // If role is not allowed
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export { PublicRoutes, PrivateRoutes, PublicRoute, PrivateRoute };
