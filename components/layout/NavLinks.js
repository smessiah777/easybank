import React from "react";
import styles from "../../styles/NavLinks.module.scss";

function NavLinks() {
  return (
    <>
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
    </>
  );
}

export default NavLinks;
