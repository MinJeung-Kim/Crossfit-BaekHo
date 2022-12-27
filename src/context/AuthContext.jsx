import { createContext, useContext, useState } from "react";
import Auth from "../api/AuthApi/auth";
import fakeAuthClient from "../api/AuthApi/fakeAuthClient";

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
