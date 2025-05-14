// pages/utils/RoutePrivate.jsx
import { Navigate } from "react-router-dom";

const RoutePrivate = ({ children }) => {
  const isAuthenticated = localStorage.getItem("client");

  if (!isAuthenticated) {
    alert("Veuillez vous connecter pour accéder à cette page.");
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RoutePrivate;
