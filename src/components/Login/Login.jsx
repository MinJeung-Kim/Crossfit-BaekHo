import React from "react";
import UserInfoInput from "../common/UserInfoInput/UserInfoInput";
import styles from "./Login.module.css";

export default function Login({ userInfoForm }) {
  return (
    <div className={`${styles.form} ${styles.login}`}>
      <span className={styles.title}>Login</span>
      <form action="">
        <UserInfoInput userInfoForm={userInfoForm} />
        {/* <div className={styles.input_field}>
          <input type="text" placeholder="Enter your email" required />
          <i className={`bx bx-envelope ${styles.icon}`}></i>
        </div>
        <div className={styles.input_field}>
          <input
            className={styles.password}
            type="password"
            placeholder="Enter your Password"
            required
          />
          <i className={`bx bx-lock-alt ${styles.icon}`}></i>
          <i className={`bx bx-hide ${styles.showHidePw}`}></i>
        </div> */}

        <div className={styles.checkbox_text}>
          <div className={styles.checkbox_content}>
            <input type="checkbox" id="logCheeck" />
            <label className={styles.text} htmlFor="logCheck">
              Remember me
            </label>
          </div>
          <a href="#" className={styles.text}>
            Forgot password?
          </a>
        </div>

        <div className={`${styles.input_field} ${styles.button}`}>
          <input type="button" value="Login Now" />
        </div>
      </form>

      <div className={styles.login_signup}>
        <span className={styles.text}>
          Not a member?
          <a href="" className={`${styles.text} ${styles.signup_text}`}>
            Signup now
          </a>
        </span>
      </div>
    </div>
  );
}
