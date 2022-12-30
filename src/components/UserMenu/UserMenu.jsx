import { useAuthContext } from "../../context/AuthContext";
import { useMode } from "../../context/ModeContext";
import { FiMoon, FiSun, FiSearch } from "react-icons/fi";
import { MdClear } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
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
        <i className={styles.moon}>
          <FiMoon />
        </i>
        <i className={styles.sun}>
          <FiSun />
        </i>
      </div>
      <div className={styles.searchBox} onClick={toggleSearchMode}>
        <div
          className={`${styles.searchToggle} ${
            searchMode ? styles.active : ""
          } `}
          onClick={toggleSearchMode}
        >
          <i className={styles.cancel}>
            <MdClear />
          </i>
          <i className={styles.search}>
            <FiSearch />
          </i>
        </div>
        <div className={styles.search_field}>
          <input type="text" />
          <i>
            <FiSearch />
          </i>
        </div>
      </div>
      <div className={`${styles.searchToggle} ${styles.search_logout}`}>
        <i onClick={onLogout}>
          <RiLogoutCircleRLine />
        </i>
      </div>
    </div>
  );
}
