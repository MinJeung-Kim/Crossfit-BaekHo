import { createContext, useContext, useState } from "react";
import { useCookies } from "react-cookie";
import Auth from "../api/AuthApi/auth";
import fakeAuthClient from "../api/AuthApi/fakeAuthClient";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isConnectForm, setIsConnectForm] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies();
  const [userInfo, setUserInfo] = useState([{ email: "", name: "" }]);

  const client = new fakeAuthClient();
  const auth = new Auth(client);

  const onChangeConnectForm = () => {
    setIsConnectForm(!isConnectForm);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
