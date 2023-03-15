import React from "react";
import styles from "./NavBar.module.css";

const NavBar = (props) => {
  const { userName } = props;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a className={styles.logoLink} href="/">
          <div className={styles.logoWrapper}>NextFlix</div>
        </a>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>Home</li>
        <li className={styles.navItem2}>My List</li>
      </ul>
      <nav className={styles.navContainer}>
        <div>
          <button className={styles.usernameBtn}>
            <p className={styles.username}>{userName}</p>
            {/** Expand more icon */}
          </button>
        </div>
        <div className={styles.navDropdown}>
          <div>
            <a className={styles.linkName}>Sign Out</a>
            <div className={styles.lineWrapper} />
          </div>
        </div>
      </nav>
      </div>
    </div>
  );
};

export default NavBar;
