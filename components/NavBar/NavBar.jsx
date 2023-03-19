import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
import ExpandMore from "../../public/static/expand_more.svg";
import NextFlix from "../../public/static/nextflix.svg";

const NavBar = (props) => {
  const { userName } = props;
  const [showDropdown, setShowDropdown] = useState(false);

  const router = useRouter();

  const handleOnClickHome = () => {
    e.preventDefault();
    router.push("/");
  };

  const handleOnClickMyList = (e) => {
    e.preventDefault();
    router.push("/browse/my-list");
  };

  const handleNameClick = (e) => {
    e.preventDefault();
    setShowDropdown((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a className={styles.logoLink} href="/">
          <div className={styles.logoWrapper}>
            <Image src={NextFlix} alt="nextflix logo" width={128} height={34}/>
          </div>
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
              <p className={styles.username} onClick={handleNameClick}>
                {userName}
              </p>
              {/** Expand more icon */}
              <Image src={ExpandMore} alt="expand more" width={24} height={24}/>
            </button>
          </div>
          {showDropdown && (
            <div className={styles.navDropdown}>
              <div>
                <Link className={styles.linkName} href="/login">
                  Sign Out
                </Link>
                <div className={styles.lineWrapper} />
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
