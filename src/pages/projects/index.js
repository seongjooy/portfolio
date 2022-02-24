import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/home.module.css";

const Projects = () => {
  const val = true;
  return (
    <Layout>
      <div className={styles.header} data-aos="slide-right">
        <h2>My Projects</h2>
        <div className="projects-container">
          <div className="top-left tio">fdjkladfkfsdaaf</div>
          <div className="top-right tio">ddfknfdss</div>
          <div className="bot-left tio">fds,masfd</div>
          <div className="bot-right tio">dfsknjlkdfs</div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
