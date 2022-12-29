import { createContext, useContext, useState } from "react";
import { useCookies } from "react-cookie";
import Auth from "../api/AuthApi/auth";
import fakeAuthClient from "../api/AuthApi/fakeAuthClient";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [userInfo, setUserInfo] = useState([{ email: "", name: "" }]);

  const client = new fakeAuthClient();
  const auth = new Auth(client);

  console.log('AuthContextProvider : ');
  return (
    <AuthContext.Provider
      value={{ auth, userInfo, setUserInfo, cookies, setCookie, removeCookie }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
