import  "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthService.jsx";

const RoutePrivate = ({ route }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? route : <Navigate to="/" replace />;
};

export default RoutePrivate;
