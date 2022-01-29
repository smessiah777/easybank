import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from ".././../styles/MobileMenu.module.scss";
import navLinksStyles from "../../styles/NavLinks.module.scss";
import NavLinksMobile from "../layout/NavLinksMobile";

const MobileMenu = ({ show, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.menuContainer}>
        <NavLinksMobile close={onClose} />
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal")
    );
  } else {
    return null;
  }
};

export default MobileMenu;
