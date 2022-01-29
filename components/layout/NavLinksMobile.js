import React from "react";
import Link from "next/link";
import styles from "../../styles/NavLinks.module.scss";

const NavLinksMobile = ({ close }) => {
  const handleClose = (e) => {
    e.preventDefault();
    close();
  };

  return (
    <>
      <ul className={styles.navListMobile}>
        <li>
          <a onClick={handleClose} href='#'>
            Home
          </a>
        </li>
        <li>
          <a onClick={handleClose} href='#'>
            About
          </a>
        </li>
        <li>
          <a onClick={handleClose} href='#'>
            Contact
          </a>
        </li>
        <li>
          <a onClick={handleClose} href='#'>
            Blog
          </a>
        </li>
        <li>
          <a onClick={handleClose} href='#'>
            Careers
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavLinksMobile;
