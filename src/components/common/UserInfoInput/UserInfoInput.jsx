import React from "react";
import styles from "./UserInfoInput.module.css";

export default function UserInfoInput({ userInfoForm }) {
  return (
    <>
      {userInfoForm.map(({ name, type, placeholder, icon }) => {
        return (
          <div className={styles.input_field} key={name}>
            <input name={name} type={type} placeholder={placeholder} required />
            <i className={`bx ${icon} ${styles.icon}`}></i>
          </div>
        );
      })}
    </>
  );
}
