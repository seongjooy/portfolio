import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/projects.module.css";
import Img from "gatsby-image";

const Projects = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <div className={styles.header} data-aos="slide-right">
        My Projects
        <div
          className={styles.temp}
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <div className={styles.project}>project_1</div>
          <div className={styles.project}>project_2</div>
          <div className={styles.project}>project_3</div>
          <div className={styles.project}>project_4</div>
          <div className={styles.project}>project_5</div>
          <div className={styles.project}>project_6</div>
          <div className={styles.project}>project_7</div>
          <div className={styles.project}>project_8</div>
        </div>
        <div className={styles.projects}>
          {projects.map((project) => (
            <Link to={"/projects" + project.frontmatter.slug} key={project.id}>
              <div>
                <Img
                  fluid={project.frontmatter.thumb.childImageSharp.fluid}
                ></Img>
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
        id
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
