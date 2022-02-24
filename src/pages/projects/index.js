import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/projects.module.css";

const Projects = () => {
  const val = true;
  return (
    <Layout>
      <div className={styles.header} data-aos="slide-right">
        <h2>My Projects</h2>
        <div className={styles.container}>
          <div className={styles.topleft}>fdjkladfkfsdaaf</div>
          <div className={styles.topright}>ddfknfdss</div>
          <div className={styles.botleft}>fds,masfd</div>
          <div className={styles.botright}>dfsknjlkdfs</div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
