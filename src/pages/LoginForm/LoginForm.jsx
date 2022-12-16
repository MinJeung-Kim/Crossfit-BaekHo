import React, { useState } from "react";
import Login from "../../components/Login/Login";
import Registration from "../../components/Registration/Registration";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className={styles.Login}>
      <div className={styles.container}>
        <div className={styles.forms}>
          {isLogin ? (
            <Login isLogin={isLogin} setIsLogin={setIsLogin} />
          ) : (
            <Registration isLogin={isLogin} setIsLogin={setIsLogin} />
          )}
        </div>
      </div>
    </div>
  );
}
