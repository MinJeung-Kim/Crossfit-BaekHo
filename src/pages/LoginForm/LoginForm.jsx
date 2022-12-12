import React, { useState } from "react";
import Login from "../../components/Login/Login";
import styles from "./LoginForm.module.css";

const logoInfo = [
  {
    name: "email",
    type: "text",
    placeholder: "Enter your email",
    icon: "bx-envelope",
    error: "Not a valid email",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Enter your Password",
    children: [{ icon: "bx-lock-alt" }, { icon: "bx-hide" }],
  },
];

const registrationInfo = [
  {
    name: "name",
    type: "text",
    placeholder: "Enter your name",
    icon: "bx-user",
  },
  {
    name: "email",
    type: "text",
    placeholder: "Enter your email",
    icon: "bx-envelope",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Create a password",
    icon: "bx-lock-alt",
  },
  {
    name: "repassword",
    type: "password",
    placeholder: "Confirm a password",
    error: "Passwords does not match",
    children: [{ icon: "bx-lock-alt" }, { icon: "bx-hide" }],
  },
];

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className={styles.Login}>
      <div className={styles.container}>
        <div className={styles.forms}>
          <Login
            logoInfo={logoInfo}
            registrationInfo={registrationInfo}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
          />
        </div>
      </div>
    </div>
  );
}
