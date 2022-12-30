import React, { useState } from "react"; 
import { useAuthContext } from "../../context/AuthContext";
import UserInfoInput from "../common/UserInfoInput/UserInfoInput";
import styles from "../Login/Login.module.css";

export default function Registration() { 
  const { auth, onChangeConnectForm } = useAuthContext();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const status = await auth.auth(inputs); 
      if (status === 201) {
        onChangeConnectForm();
      } else {
        return "회원 가입 실패!!!";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`${styles.form} ${styles.login}`}>
      <p className={styles.title}> Registration </p>
      <form onSubmit={handleSignUp}>
        <UserInfoInput
          name={"name"}
          type={"text"}
          placeholder={"Enter your name"}
          icon={"bx-user"}
          error={""}
          inputs={inputs}
          setInputs={setInputs}
        />
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
          placeholder={"Create a password"}
          icon={"bx-lock-alt"}
          hideIcon={"bx-hide"}
          error={""}
          inputs={inputs}
          setInputs={setInputs}
          autoComplete={"off"}
        />
        <UserInfoInput
          name={"repassword"}
          type={"password"}
          placeholder={"Confirm a password"}
          icon={"bx-lock-alt"}
          hideIcon={"bx-hide"}
          error={"Passwords does not match"}
          inputs={inputs}
          setInputs={setInputs}
          autoComplete={"off"}
        />

        <div className={`${styles.input_field} ${styles.button}`}>
          <input type="submit" value={"SignUp"} />
        </div>
      </form>

      <div className={styles.login_signup}>
        <p className={styles.text}>
          Are you a member?
          <button
            type="reset"
            className={`${styles.text} ${styles.signup_text}`}
            onClick={onChangeConnectForm}
          >
            Signin
          </button>
        </p>
      </div>
    </div>
  );
}
