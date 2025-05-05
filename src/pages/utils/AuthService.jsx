import  { createContext, useState, useContext } from "react";

const AuthService = createContext();

export const AuthProvider = ({ route }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const isLogin = () => setIsAuthenticated(true);
  const isLogout = () => setIsAuthenticated(false);

  return (
    <AuthService.Provider value={{ isAuthenticated, isLogin, isLogout }}>
      {route}
    </AuthService.Provider>
  );
};

export const useAuth = () => useContext(AuthService);
