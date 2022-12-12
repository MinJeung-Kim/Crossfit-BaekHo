import React, { useState } from "react";
import styles from "./UserInfoInput.module.css";

export default function UserInfoInput({
  name,
  type,
  placeholder,
  icon,
  children,
  inputs,
  setInputs,
}) {
  const [isType, setIsType] = useState(false);

//   const { name, email, password, repassword } = inputs;

  const handleChangeType = () => {
    setIsType(!isType);
  };

  return (
    <div className={styles.input_field} key={name}>
      <input
        name={name}
        type={isType ? "text" : type}
        placeholder={placeholder}
        required
      />
      {children ? (
        children.map(({ icon }) => {
          return icon === "bx-hide" ? (
            <i
              key={icon}
              className={`bx ${isType ? "bx-show" : icon} ${styles.showHidePw}`}
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
  );
}
