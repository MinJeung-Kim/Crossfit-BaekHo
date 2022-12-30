import React from "react";
import Login from "../../components/Login/Login";
import Registration from "../../components/Registration/Registration";
import { useAuthContext } from "../../context/AuthContext";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const { isConnectForm } = useAuthContext();
  return (
    <div className={styles.Login}>
      <div className={styles.container}>
        <div className={styles.forms}>
          {isConnectForm ? <Login /> : <Registration />}
        </div>
      </div>
    </div>
  );
}
