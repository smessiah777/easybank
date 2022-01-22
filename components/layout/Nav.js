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
              <Image
                className={styles.brand}
                src='/img/logo.svg'
                width='140px'
                height='20px'
              />
            </div>
            <ul className={styles.navList}>
              <li>
                <div className={styles.bottom}>Home</div>
              </li>
              <li>
                <div className={styles.bottom}>About</div>
              </li>
              <li>
                <div className={styles.bottom}>Contact</div>
              </li>
              <li>
                <div className={styles.bottom}>Blog</div>
              </li>
              <li>
                <div className={styles.bottom}>Careers</div>
              </li>
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
