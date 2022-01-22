import React from "react";
import styles from "../../styles/Services.module.scss";
import services from "../data/services.json";
import ServicesCard from "../common/ServicesCard";

const Services = () => {
  return (
    <section className={`${styles.services} section`}>
      <div className='container'>
        <div className={styles.flexText}>
          <div className={styles.textContent}>
            <h2>
              Why choose <br className='em_hide' /> Easybank?
            </h2>
            <p>
              We leverage Open Banking to turn your bank account into your
              financial hub.
              <br className='em_show' /> Control your finances like never
              before.
            </p>
          </div>
        </div>
        <div className={styles.flexCards}>
          {services.map((service) => {
            return <ServicesCard key={service.id} data={service} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
