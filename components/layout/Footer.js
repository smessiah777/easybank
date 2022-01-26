import React from "react";
import Image from "next/image";
import styles from "../../styles/Footer.module.scss";
import styleBtn from "../../styles/Button.module.scss";
import socialData from "../data/social.json";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className={styles.footerBody}>
        <div className='container'>
          <div className={styles.flexContainer}>
            <div className={styles.containerFirst}>
              <div className={styles.logoContainer}>
                <Image
                  className={styles.footerLogo}
                  src='/img/footer-logo.png'
                  width='140px'
                  height='20px'
                />
              </div>
              <ul className={styles.socialList}>
                {socialData.map((social) => {
                  return (
                    <li key={social.id}>
                      <img
                        className={styles.socialIcon}
                        src={social.icon}
                        // width='20px'
                        // height='20px'
                      />
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className={styles.footerLinksContainer}>
              <ul className={styles.linksList}>
                <li>About Us</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>

              <ul className={styles.linksList}>
                <li>Careers</li>
                <li>Support</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className={styles.containerLast}>
              <button
                className={`${styleBtn["btn"]} ${styleBtn["btn__footer"]} ${styles.navBtn}`}
              >
                Request Invite
              </button>

              <p className={styles.copyright}>
                &copy; Easybank. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
