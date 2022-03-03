import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/experience.module.css";

const experience = () => {
  return (
    <Layout>
      <div className={styles.header} data-aos="slide-right">
        My Experience
      </div>
      <div className={styles.container}>
        <div className={styles.job1}>
          <div className={styles.job1left} data-aos="slide-right">
            <h2>Job Title 1</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras em
            euismod, pellentesque orci a, ultrices dui. Pellentesque at dolor
            enim. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec nec da
          </div>
          <div className={styles.job1right} data-aos="slide-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras em
            euismod, pellentesque
            <img src="/email.png"></img>
          </div>
        </div>
        <div className={styles.job2}>
          <div className={styles.job2left} data-aos="slide-right">
            <h2>Job Title 1</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras em
            euismod, pellentesque orci a, ultrices dui. Pellentesque at dolor
            enim. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec nec da
          </div>
          <div className={styles.job2right} data-aos="slide-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras em
            euismod, pellentesque
            <img src="/email.png"></img>
          </div>
        </div>
      </div>
      <div className={styles.awards_certificates} data-aos="slide-right">
        Awards/Certificates
      </div>
    </Layout>
  );
};

export default experience;
