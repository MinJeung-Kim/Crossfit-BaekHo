import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { FiLock } from "react-icons/fi";
import { GrFormViewHide } from "react-icons/gr";
import { useAuthContext } from "../../context/AuthContext";
import { socialMedia } from "../../util/socialMedia";
import Alert from "../common/Alert/Alert";
import UserInfoInput from "../common/UserInfoInput/UserInfoInput";
import styles from "./Login.module.css";

export default function Login() {
  const navigate = useNavigate();
  const { auth, setUserInfo, setCookie, onChangeConnectForm } =
    useAuthContext();
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const [satusMsg, setSatuseMsg] = useState("");

  const onSubmitAccount = async (e) => {
    e.preventDefault();
    try {
      const userInfo = await auth.auth(account);
      if (userInfo.status === 200) {
        setCookie("accessToken", userInfo.accessToken);
        const { accessToken: _, ...rest } = userInfo;
        setUserInfo(rest);
        navigate("/", { replace: true });
      } else {
        console.log("false");
      }
      // if (!userInfo) {
      //   setSsatuseMsg("아이디 또는 비밀번호가 일치하지 않습니다.");
      // } else {
      //   setUserInfo(userInfo);
      //   navigate("/", { replace: true });
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`${styles.form} ${styles.login}`}>
      {satusMsg !== "" && <Alert msg={satusMsg} setMsg={setSatuseMsg} />}
      <p className={styles.title}> Login </p>
      <form onSubmit={onSubmitAccount}>
        <UserInfoInput
          name={"email"}
          type={"text"}
          placeholder={"Enter your email"}
          icon={<HiOutlineMail />}
          inputs={account}
          setInputs={setAccount}
        />

        <UserInfoInput
          name={"password"}
          type={"password"}
          placeholder={"Enter your Password"}
          icon={<FiLock />}
          hideIcon={<GrFormViewHide />}
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
            onClick={onChangeConnectForm}
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
              <i className={styles.git_icon}>{icon}</i>
              <span className={styles.tooltip}>{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
