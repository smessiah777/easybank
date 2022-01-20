import React from "react";
import Image from "next/image";
import styles from "../../styles/Nav.module.scss";
import styleBtn from "../../styles/Button.module.scss";

const Nav = () => {
  return (
    <>
      <nav className={styles.navContainer}>
        <div className='container'>
          <div className={styles.flexContainer}>
            <div className={styles.brandContainer}>
              <Image src='/img/logo.svg' width='140px' height='20px' />
            </div>
            <ul className={styles.navList}>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
            <button
              className={`${styleBtn["btn"]} ${styleBtn["btn--nav"]} ${styles.navBtn}`}
            >
              Request Invite
            </button>

            <div className={styles.hamburger}>
              <Image src='/img/icon-hamburger.svg' width='24px' height='11px' />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
