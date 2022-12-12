import React, { useEffect, useState } from "react";
import styles from "./UserInfoInput.module.css";

export default function UserInfoInput({
  name,
  type,
  placeholder,
  icon,
  error,
  children,
  inputs,
  setInputs,
}) {
  const [isType, setIsType] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

 

  const handleErrorCheck = (email) => {
    var reg =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    !reg.test(email) && setErrorMsg(error);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const nextInputs = {
      ...inputs,
      [name]: value,
    };

    if (name === "email") handleErrorCheck(value);

    setInputs(nextInputs);
  };

  const handleChangeType = () => {
    setIsType(!isType);
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
          required
        />
        {children ? (
          children.map(({ icon }) => {
            return icon === "bx-hide" ? (
              <i
                key={icon}
                className={`bx ${isType ? "bx-show" : icon} ${
                  styles.showHidePw
                }`}
                onClick={handleChangeType}
              ></i>
            ) : (
              <i key={icon} className={`bx ${icon} ${styles.icon}`}></i>
            );
          })
        ) : icon === "bx-hide" ? (
          <i
            className={`bx ${isType ? "bx-show" : icon} ${styles.showHidePw}`}
            onClick={handleChangeType}
          ></i>
        ) : (
          <i className={`bx ${icon} ${styles.icon}`}></i>
        )}
      </div>
      {errorMsg !== "" && (
        <span className={styles.errorMsg}>
          <i className="bx bx-error-circle"></i>
          {errorMsg}
        </span>
      )}
    </>
  );
}
