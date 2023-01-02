import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import UserInfoInput from "../common/UserInfoInput/UserInfoInput";
import { HiOutlineMail } from "react-icons/hi";
import { FiUser, FiLock } from "react-icons/fi";
import { GrFormViewHide } from "react-icons/gr";
import styles from "../Login/Login.module.css";

export default function Registration() {
  const { auth, onChangeConnectForm } = useAuthContext();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
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
          icon={<FiUser />} 
          inputs={inputs}
          setInputs={setInputs}
        />
        <UserInfoInput
          name={"email"}
          type={"text"}
          placeholder={"Enter your email"}
          icon={<HiOutlineMail />} 
          inputs={inputs}
          setInputs={setInputs}
        />
        <UserInfoInput
          name={"password"}
          type={"password"}
          placeholder={"Create a password"}
          icon={<FiLock />}
          hideIcon={<GrFormViewHide />} 
          inputs={inputs}
          setInputs={setInputs}
          autoComplete={"off"}
        />
        <UserInfoInput
          name={"passwordConfirm"}
          type={"password"}
          placeholder={"Confirm a password"}
          icon={<FiLock />}
          hideIcon={<GrFormViewHide />} 
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
