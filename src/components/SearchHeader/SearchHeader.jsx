import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./SearchHeader.module.css";

export default function SearchHeader({ isActive, setIsActive }) {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");

  useEffect(() => {
    // text가 변경될때마다 input도 같이 변경
    setText(keyword || "");
  }, [keyword]);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  return (
    // <header className={styles.home_section}>
    //   <div className={styles.home_content}>
    //     <i className="bx bx-menu" onClick={handleToggle}></i>
    //     <form className={styles.search_form} onSubmit={handleSubmit}>
    //       <input
    //         type="text"
    //         name="text"
    //         placeholder="Searcch..."
    //         value={text}
    //         onChange={(e) => setText(e.target.value)}
    //       />
    //       <button>
    //         <i className="bx bx-search"></i>
    //       </button>
    //     </form>
    //   </div>
    // </header>
    <header className={styles.home_section}>
      <nav>
        <div className={styles.sidebar_button}>
          <i className="bx bx-menu" onClick={handleToggle}></i>
          <span className={styles.dashboard}>Dashboard</span>
        </div>
        <div className={styles.search_box}>
          <input type="text" placeholder="Search..." />
          <i className="bx bx-search"></i>
        </div>
        <div className={styles.profile_details}>
          <img src="images/profile.png" alt="" />
          <span className={styles.admin_name}>Prem Shahi</span>
          <i className="bx bxs-chevron-down"></i>
        </div>
      </nav>
    </header>
  );
}
