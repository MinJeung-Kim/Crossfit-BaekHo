import React from "react";
import Login from "../../components/Login/Login";
import Registration from "../../components/Login/Registration";
import styles from "./LoginForm.module.css";

const userInfo = [
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
    placeholder: "Enter your Password",
    icon: "bx-lock-alt",
  },
  // {   name: "rePassword", type: "text", icon: "bx-lock-alt" },
];

export default function LoginForm() {
  return (
    <div className={styles.Login}>
      <div className={styles.container}>
        <div className={styles.forms}>
          <Login userInfoForm={userInfo} />
          {/* <Registration userInfoForm={userInfo} /> */}
        </div>
      </div>
    </div>
  );
}
