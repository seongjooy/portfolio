import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/projects.module.css";

const Projects = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes;

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
        <div className={styles.projects}>
          {projects.map((project) => (
            <Link to={"/projects" + project.frontmatter.slug} key={project.id}>
              <div>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          stack
          slug
        }
        id
      }
    }
  }
`;
