import { createContext, useContext, useState } from "react";

//1. Tipado de objeto principal del contexto
export type UserRole = "admin" | "common";

type AuthContextType = {
  isLoggedIn: boolean;
  role: UserRole | null;
  login: (role: UserRole) => void;
  logout: () => void;
};

//2. Creacion del contexto
const AuthContext = createContext<AuthContextType | null>(null);

//4. exposicion de contexto en forma de hook personalizdo
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return context;
};

//3. Crear el Provider: medio por el cual se maneja el estado global
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState<UserRole | null>(null);

  const login = (selectedRole: UserRole) => {
    setRole(selectedRole);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setRole(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
