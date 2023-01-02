import React, { useState } from "react";
// import validator from "validator";
import { BiShow } from "react-icons/bi";
import { MdErrorOutline } from "react-icons/md";
import styles from "./UserInfoInput.module.css";
import { useAuthContext } from "../../../context/AuthContext";

export default function UserInfoInput({
  name,
  type,
  placeholder,
  autoComplete,
  icon,
  hideIcon,
  inputs,
  setInputs,
}) {
  const { error, setErrorMsg } = useAuthContext();
  const [isType, setIsType] = useState(false);

  const handleValidationCheck = (email) => {
    // if (validator.isEmail(email)) {
    //   console.log(email);
    //   setErrorMsg("Valid Email :)");
    // } else {
    //   setErrorMsg("Enter valid Email!");
    // }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const nextInputs = {
      ...inputs,
      [name]: value,
    };

    if (name === "email") handleValidationCheck(value);

    setInputs(nextInputs);
  };

  const handleChangeType = () => {
    setIsType(!isType);
  };

  const chooseIcon = () => {
    if (hideIcon) {
      return (
        <>
          <i className={styles.showHidePw} onClick={handleChangeType}>
            {isType ? hideIcon : <BiShow />}
          </i>
          <i className={styles.icon}>{icon}</i>
        </>
      );
    }
  };

  return (
    <>
      <div className={styles.input_field} key={name}>
        <input
          name={name}
          value={inputs[name]}
          onChange={handleChange}
          type={isType ? "text" : type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required
        />
        {hideIcon ? chooseIcon() : <i className={styles.icon}>{icon}</i>}
      </div>
      {error && (
        <span className={styles.errorMsg}>
          <i>
            <MdErrorOutline />
          </i>
          {error}
        </span>
      )}
    </>
  );
}
