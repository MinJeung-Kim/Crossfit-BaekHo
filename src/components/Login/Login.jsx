import React, { useState } from "react";
import UserInfoInput from "../common/UserInfoInput/UserInfoInput"; 
import styles from "./Login.module.css";

const socialMedia = [
  { name: "git", icon: "bx-git-branch" },
  { name: "kakao", icon: "bxs-message-rounded" },
  { name: "facebook", icon: "bxl-facebook" },
  { name: "google", icon: "bxl-google" },
];

export default function Login({ isLogin, setIsLogin }) { 
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChangeStatus = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={`${styles.form} ${styles.login}`}>
      <p className={styles.title}> Login </p>
      <form action="">
        <UserInfoInput
          name={"email"}
          type={"text"}
          placeholder={"Enter your email"}
          icon={"bx-envelope"}
          error={""}
          inputs={inputs}
          setInputs={setInputs}
        />

        <UserInfoInput
          name={"password"}
          type={"password"}
          placeholder={"Enter your Password"}
          icon={"bx-lock-alt"}
          hideIcon={"bx-hide"}
          error={""}
          inputs={inputs}
          setInputs={setInputs}
        />

        <div className={styles.checkbox_text}>
          <div className={styles.checkbox_content}>
            <input type="checkbox" id="logCheeck" />
            <label className={styles.text} htmlFor="logCheck">
              Remember me
            </label>
          </div>
          <button type="button" className={styles.text}>
            Forgot password?
          </button>
        </div>

        <div className={`${styles.input_field} ${styles.button}`}>
          <input type="button" value={"Login Now"} />
        </div>
      </form>

      <div className={styles.login_signup}>
        <p className={styles.text}>
          Not a member?
          <button
            type="reset"
            className={`${styles.text} ${styles.signup_text}`}
            onClick={handleChangeStatus}
          >
            Signup now
          </button>
        </p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.media_options}>
        {socialMedia.map(({ name, icon }) => {
          return (
            <div
              className={`${styles.field} ${styles.git}`}
              key={name}
              // onClick={login}
            >
              <i className={`bx ${icon} ${styles.git_icon}`}></i>
              <span className={styles.tooltip}>{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
