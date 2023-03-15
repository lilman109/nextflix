import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./NavBar.module.css";

const NavBar = (props) => {
  const { userName } = props;

  const router = useRouter();

  const handleOnClickHome = () => {
    e.preventDefault();
    router.push("/");
  };

  const handleOnClickMyList = (e) => {
    e.preventDefault();
    router.push("/browse/my-list");
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a className={styles.logoLink} href="/">
          <div className={styles.logoWrapper}>NextFlix</div>
        </a>
        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
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
              <Link className={styles.linkName} href="/login">
                Sign Out
              </Link>
              <div className={styles.lineWrapper} />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
