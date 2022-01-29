import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Nav.module.scss";
//importing NavLinks style sheet to handle visibility based on devices type
import navLinksStyles from "../../styles/NavLinks.module.scss";
import styleBtn from "../../styles/Button.module.scss";
import "animate.css";
import NavLinks from "./NavLinks";

const Nav = ({ show, onOpen, onClose }) => {
  const [styleClass, setStyleClass] = useState("");

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleOpen = (e) => {
    e.preventDefault();
    onOpen();
  };

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
            <NavLinks className='nav-hidden' />
            <button
              className={`${styleBtn["btn"]} ${styleBtn["btn__nav"]} ${styles.navBtn}`}
            >
              Request Invite
            </button>
            {show ? (
              <div className={`${styles.close} ${styleClass}`}>
                <Image
                  onClick={handleClose}
                  src='/img/icon-close.svg'
                  width='18px'
                  height='19px'
                />
              </div>
            ) : (
              <div className={`${styles.hamburger} ${styleClass}`}>
                <Image
                  onClick={handleOpen}
                  src='/img/icon-hamburger.svg'
                  width='24px'
                  height='11px'
                />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
