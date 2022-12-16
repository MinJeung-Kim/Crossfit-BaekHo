import { useState } from "react";
import { Link } from "react-router-dom"; 
import { menus } from "../../util/sideNavMenu";
import styles from "./SideNavigationBar.module.css";


export default function SideNavigationBar({ isActive }) { 
  const [arrow, setArrow] = useState({});
  const handleToggle = (id) => {
    // console.log({ ...arrow, [id]: !arrow[id] });
    setArrow({ ...arrow, [id]: !arrow[id] });
  };
 
  return (
    <>
      <nav className={`${styles.sidebar}  ${isActive ? styles.close : ""}`}>
        <div className={styles.logo_details}>
          <i className="bx bxl-c-plus-plus"></i>
          <span className={styles.logo_name}>CodingLab</span>
        </div>
        <ul className={styles.nav_links}>
          {menus.map(({ id, name, url, icon, children }) => {
            return children ? (
              <li className={arrow[id] && `${styles.showMenu}`} key={name}>
                <div className={styles.icon_link}>
                  <a>
                    <i className={`bx ${icon}`}></i>
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
                  <i className={`bx ${icon}`}></i>
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
            <div className={styles.profile_name}>Prem shahi</div>
            <div className={styles.job}>Web Design</div>
          </div>
          <i className="bx bx-log-out"></i>
        </div>
      </nav>
    </>
  );
}
