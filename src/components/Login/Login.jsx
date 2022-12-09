import React from "react";
import UserInfoInput from "../common/UserInfoInput/UserInfoInput";
import styles from "./Login.module.css";

export default function Login({
  logoInfo,
  registrationInfo,
  isLogin,
  setIsLogin,
}) {
  const handleChange = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={`${styles.form} ${styles.login}`}>
      <p className={styles.title}>{isLogin ? "Login" : "Registration"}</p>
      <form action="">
        {isLogin
          ? logoInfo.map(({ name, type, placeholder, children, icon }) => {
              return (
                <UserInfoInput
                  key={name}
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  icon={icon}
                  children={children}
                />
              );
            })
          : registrationInfo.map(
              ({ name, type, placeholder, children, icon }) => {
                return (
                  <UserInfoInput
                    key={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    icon={icon}
                    children={children}
                  />
                );
              }
            )} 

        <div className={styles.checkbox_text}>
          <div className={styles.checkbox_content}>
            <input type="checkbox" id="logCheeck" />
            <label className={styles.text} htmlFor="logCheck">
              Remember me
            </label>
          </div>
          <span className={styles.text}>Forgot password?</span>
        </div>

        <div className={`${styles.input_field} ${styles.button}`}>
          <input type="button" value="Login Now" />
        </div>
      </form>

      <div className={styles.login_signup}>
        <p className={styles.text}>
          Not a member?
          <span
            className={`${styles.text} ${styles.signup_text}`}
            onClick={handleChange}
          >
            Signup now
          </span>
        </p>
      </div>
    </div>
  );
}
