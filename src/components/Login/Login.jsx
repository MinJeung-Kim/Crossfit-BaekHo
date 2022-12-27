import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { socialMedia } from "../../util/socialMedia";
import UserInfoInput from "../common/UserInfoInput/UserInfoInput";
import styles from "./Login.module.css";

export default function Login({ isLogin, setIsLogin }) {
  const navigate = useNavigate();
  const { auth, setUser } = useAuthContext();
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const onSubmitAccount = async (e) => {
    e.preventDefault();
    const userInfo = await auth.auth(account);

    console.log(userInfo);
    if (!userInfo) {
      return "아이디 또는 비밀번호가 일치하지 않습니다.";
    } else {
      setUser(userInfo);
      navigate("/", { replace: true });
    }
  };

  const handleChangeStatus = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={`${styles.form} ${styles.login}`}>
      <p className={styles.title}> Login </p>
      <form onSubmit={onSubmitAccount}>
        <UserInfoInput
          name={"email"}
          type={"text"}
          placeholder={"Enter your email"}
          icon={"bx-envelope"}
          error={""}
          inputs={account}
          setInputs={setAccount}
        />

        <UserInfoInput
          name={"password"}
          type={"password"}
          placeholder={"Enter your Password"}
          icon={"bx-lock-alt"}
          hideIcon={"bx-hide"}
          error={""}
          inputs={account}
          setInputs={setAccount}
          autoComplete={"off"}
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
          <input type="submit" value={"Login Now"} />
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
            <div className={`${styles.field} ${styles.git}`} key={name}>
              <i className={`bx ${icon} ${styles.git_icon}`}></i>
              <span className={styles.tooltip}>{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
