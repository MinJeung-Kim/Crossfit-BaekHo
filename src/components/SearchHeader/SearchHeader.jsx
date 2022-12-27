import React, { useState } from "react";
import UserMenu from "../UserMenu/UserMenu";
import styles from "./SearchHeader.module.css";

export default function SearchHeader({ isActive, setIsActive }) {
  const [text, setText] = useState("");

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={styles.home_section}>
      <nav>
        <div className={styles.sidebar_button}>
          <i className="bx bx-menu" onClick={handleToggle}></i>
          <span className={styles.dashboard}>Dashboard</span>
        </div>
        <div className={styles.search_box}>
          <input
            type="text"
            name="text"
            placeholder="Search..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <i className="bx bx-search"></i>
        </div>
        <div className={styles.profile_details}>
          <UserMenu />
        </div>
      </nav>
    </header>
  );
}
