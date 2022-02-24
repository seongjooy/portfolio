import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/experience.module.css";

const experience = () => {
  return (
    <Layout>
      <div className={styles.header} data-aos="slide-right">
        <h2>My Experience</h2>
      </div>
      <div>
        my new
        <img src="/email.png"></img>
      </div>
    </Layout>
  );
};

export default experience;
