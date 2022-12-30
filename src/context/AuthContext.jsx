import { createContext, useContext, useState } from "react";
import { useCookies } from "react-cookie";
import Auth from "../api/AuthApi/auth";
import fakeAuthClient from "../api/AuthApi/fakeAuthClient";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [isConnectForm, setIsConnectForm] = useState(true);
  const [userInfo, setUserInfo] = useState({ email: "", name: "" });

  const client = new fakeAuthClient();
  const auth = new Auth(client);

  const onChangeConnectForm = () => {
    setIsConnectForm(!isConnectForm);
  };
  const onLogout = () => {
    console.log("onLogout");
    removeCookie("accessToken");
    setUserInfo({ email: "", name: "" });
  };

  return (
    <AuthContext.Provider
      value={{
        isConnectForm,
        onChangeConnectForm,
        auth,
        userInfo,
        setUserInfo,
        cookies,
        setCookie,
        removeCookie,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
