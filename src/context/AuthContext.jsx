import { createContext, useContext, useState } from "react"; 
import fakeAuthClient from "../api/AuthApi/fakeAuthClient";
import Auth from '../api/AuthApi/auth'

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState([{ email: "", name: "" }]);

  const client = new fakeAuthClient();
  const auth = new Auth(client);

  return (
    <AuthContext.Provider value={{ auth, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
