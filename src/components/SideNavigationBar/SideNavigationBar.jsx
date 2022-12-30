import { useState } from "react";
import { Link } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import { useAuthContext } from "../../context/AuthContext";
import { menus } from "../../util/sideNavMenu";
import styles from "./SideNavigationBar.module.css";

export default function SideNavigationBar({ isActive }) {
  const { userInfo, onLogout } = useAuthContext();
  const [arrow, setArrow] = useState({});

  const handleToggle = (id) => {
    // console.log({ ...arrow, [id]: !arrow[id] });
    setArrow({ ...arrow, [id]: !arrow[id] });
  };

  return (
    <>
      <nav className={`${styles.sidebar}  ${isActive ? styles.close : ""}`}>
        <div className={styles.logo_details}>
          <i ><SiCplusplus/></i>
          <span className={styles.logo_name}>CodingLab</span>
        </div>
        <ul className={styles.nav_links}>
          {menus.map(({ id, name, url, icon, children }) => {
            return children ? (
              <li className={arrow[id] && `${styles.showMenu}`} key={name}>
                <div className={styles.icon_link}>
                  <a>
                    <i>{icon}</i>
                    <span
                      className={styles.link_name}
                      onClick={(e) => handleToggle(id)}
                    >
                      {name}
                    </span>
                  </a>
                  <i className={`bx bxs-chevron-down ${styles.arrow}`}></i>
                </div>
                <ul className={styles.sub_menu}>
                  {children.map(({ name, url }) => {
                    return (
                      <li key={name}>
                        <Link to={url}>{name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ) : (
              <li key={name}>
                <Link to={url}>
                  <i>{icon}</i>
                  <span className={styles.link_name}>{name}</span>
                </Link>
                <ul className={`${styles.sub_menu} ${styles.blank}`}>
                  <li>
                    <Link to={url}>{name}</Link>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
        <div className={styles.profile_details}>
          <div className={styles.profile_content}>
            <img src="images/profile.png" alt="profile" />
          </div>

          <div className={styles.name_job}>
            <div className={styles.profile_name}>{userInfo.name}</div>
            <div className={styles.job}>{userInfo.email}</div>
          </div>
          <i onClick={onLogout}>
            <RiLogoutCircleRLine />
          </i>
        </div>
      </nav>
    </>
  );
}
