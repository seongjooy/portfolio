import { Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/projects.module.css";

const Projects = () => {
  return (
    <Layout>
      <div className={styles.header} data-aos="slide-right">
        My Projects
        <div
          className={styles.temp}
          data-aos="zoom-in-right"
          data-aos-duration="1500"
        >
          <div className={styles.project}>
            Geographic Information System Mapper
            <Link to="/projects/mapper">
              <img className={styles.preview} src="/gis-mapper.png" alt="" />
            </Link>
            <div className={styles.text}>
              Used C++ to develop a mapping software using OpenStreetMap API.
              Used Git for version control amongst 2 other teammates. <br />
              <br />
              Stack: C++, STL, Git
            </div>
          </div>
          <div className={styles.project}>
            Septic Shock Predictor Using XGBoost
            <Link to="/projects/mapper">
              <img className={styles.preview} src="/gis-mapper.png" alt="" />
            </Link>
            <div className={styles.text}>
              Developed
              <br />
              <br />
              Stack: Python, Scikit-Learn, XGBoost
            </div>
          </div>
          <div className={styles.project}>Array Visualizer in Memory</div>
          <div className={styles.project}>
            ML Model Development Application Interface
          </div>
          <div className={styles.project}>Capstone</div>
          <div className={styles.project}>Neural Network From Scratch</div>
          <div className={styles.project}>World Cup Draw Simulator</div>
          <div className={styles.project}>Text</div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
