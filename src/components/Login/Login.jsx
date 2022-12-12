import React, { useState } from "react";
import UserInfoInput from "../common/UserInfoInput/UserInfoInput";
import styles from "./Login.module.css";

export default function Login({
  logoInfo,
  registrationInfo,
  isLogin,
  setIsLogin,
}) {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const handleChangeStatus = () => {
    setIsLogin(!isLogin);
    setInputs({
      name: "",
      email: "",
      password: "",
      repassword: "",
    });
  };

  return (
    <div className={`${styles.form} ${styles.login}`}>
      <p className={styles.title}>{isLogin ? "Login" : "Registration"}</p>
      <form action="">
        {isLogin
          ? logoInfo.map(({ name, type, placeholder, children, icon, error }) => {
              return (
                <UserInfoInput
                  key={name}
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  icon={icon}
                  error={error}
                  children={children}
                  inputs={inputs}
                  setInputs={setInputs}
                />
              );
            })
          : registrationInfo.map(
              ({ name, type, placeholder, error, icon , children }) => {
                return (
                  <UserInfoInput
                    key={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    icon={icon}
                    error={error}
                    children={children}
                    inputs={inputs}
                    setInputs={setInputs}
                  />
                );
              }
            )}

        {isLogin && (
          <div className={styles.checkbox_text}>
            <div className={styles.checkbox_content}>
              <input type="checkbox" id="logCheeck" />
              <label className={styles.text} htmlFor="logCheck">
                Remember me
              </label>
            </div>
            <span className={styles.text}>Forgot password?</span>
          </div>
        )}

        <div className={`${styles.input_field} ${styles.button}`}>
          <input type="button" value={isLogin ? "Login Now" : "SignUp"} />
        </div>
      </form>

      <div className={styles.login_signup}>
        <p className={styles.text}>
          {isLogin ? "Not a member?" : "Are you a member?"}
          <span
            className={`${styles.text} ${styles.signup_text}`}
            onClick={handleChangeStatus}
          >
            {isLogin ? "Signup now" : "Signin"}
          </span>
        </p>
      </div>
    </div>
  );
}
