import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SideNavigationBar.module.css";

const menus = [
  { id: 1, name: "Dashboard", url: "/", icon: "bx-grid-alt" },
  {
    id: 2,
    name: "Category",
    icon: "bx-collection",
    children: [
      { id: 2, name: "Category" },
      { id: 2, name: "CategoryDetail", url: "/category" },
      { id: 2, name: "JavaScript", url: "/" },
      { id: 2, name: "PHP & MySQL", url: "/" },
    ],
  },
  {
    id: 3,
    name: "Posts",
    icon: "bx-book-alt",
    children: [
      { id: 2, name: "Posts" },
      { id: 2, name: "Web Design", url: "/" },
      { id: 2, name: "Login Form", url: "/" },
      { id: 2, name: "Card Design", url: "/" },
    ],
  },
  { id: 4, name: "Analytics", url: "/analytics", icon: "bx-pie-chart-alt-2" },
  { id: 5, name: "Chart", url: "/chart", icon: "bx-line-chart" },
  {
    id: 6,
    name: "Plugins",
    icon: "bx-plug",
    children: [
      { id: 2, name: "Plugins", url: "/plugins" },
      { id: 2, name: "UI Face", url: "/ui" },
      { id: 2, name: "Pigments", url: "/pigments" },
      { id: 2, name: "Box Icons", url: "/box" },
    ],
  },
  { id: 7, name: "Explore", url: "/explore", icon: "bx-compass" },
  { id: 8, name: "History", url: "/history", icon: "bx-history" },
  { id: 9, name: "Setting", url: "/setting", icon: "bx-cog" },
];

export default function SideNavigationBar({ isActive }) {
  // const [isActive, setIsActive] = useState(false);
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
        </ul>
      </nav> 
    </>
  );
}
