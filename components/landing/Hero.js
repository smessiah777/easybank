import React from "react";
import Image from "next/image";
import styles from "../../styles/Hero.module.scss";
import Button from "../common/Button";
import Nav from "../../components/layout/Nav";

const Hero = () => {
  return (
    <>
      <section className={`${styles.hero} section`}>
        <Nav />
        <img
          className={styles.mockup}
          src='/img/image-mockups.png'
          width='767px'
          height='939px'
        />
        <div className='container'>
          <div className={styles.flexContainer}>
            <div className={styles.textContent}>
              <h2>
                Next generation <br />
                digital banking
              </h2>
              <p>
                Take your financial life online. Your Easybank{" "}
                <br className='em_hide' /> account <br className='em_show' />{" "}
                will be a one-stop-shop for spending,
                <br className='em_hide' /> saving, <br className='em_show' />
                budgeting, investing, and much more.
              </p>

              <Button>Request Invite</Button>
            </div>
            <div className={styles.mobileImgContainer}>
              <Image
                className={styles.mobileMockup}
                src='/img/sliced-mockups.png'
                width='400px'
                height='370px'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
