import React from "react";
import styles from "../../styles/Hero.module.scss";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className='container'>
        <div className={styles.flexContainer}>
          <div className={styles.textContent}></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
