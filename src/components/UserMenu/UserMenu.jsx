import { useAuthContext } from "../../context/AuthContext";
import { useMode } from "../../context/ModeContext";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const { onLogout } = useAuthContext();
  const { darkMode, toggleDarkMode, searchMode, toggleSearchMode } = useMode();

  return (
    <div className={styles.darkLight_searchBox}>
      <div
        className={`${styles.dark_light} ${darkMode ? styles.active : ""} `}
        onClick={toggleDarkMode}
      >
        <i className={`bx bx-moon ${styles.moon}`}></i>
        <i className={`bx bx-sun ${styles.sun}`}></i>
      </div>
      <div className={styles.searchBox} onClick={toggleSearchMode}>
        <div
          className={`${styles.searchToggle} ${
            searchMode ? styles.active : ""
          } `}
          onClick={toggleSearchMode}
        >
          <i className={`bx bx-x ${styles.cancel}`}></i>
          <i className={`bx bx-search ${styles.search}`}></i>
        </div>
        <div className={styles.search_field}>
          <input type="text" />
          <i className="bx bx-search"></i>
        </div>
      </div>
      <div className={`${styles.searchToggle} ${styles.search_logout}`}>
        <i className="bx bx-log-in-circle"  onClick={onLogout}></i>
      </div>
    </div>
  );
}
