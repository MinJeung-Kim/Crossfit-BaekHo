import React from "react";
import styles from "./Alert.module.css";

export default function Alert({ msg, setMsg }) {
  const handleClose = () => {
    setMsg("");
  };
  return (
    <div className={styles.center}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Modal Popup</h2>
          <i className="bx bx-x" onClick={handleClose}></i>
        </div>
        <div className={styles.icon}>
          <i className="bx bx-check"></i>
        </div>
        <p>{msg}</p>
        <div className={styles.line}></div>
        <label
          htmlFor="click"
          className={styles.close_btn}
          onClick={handleClose}
        >
          Close
        </label>
      </div>
    </div>
  );
}
