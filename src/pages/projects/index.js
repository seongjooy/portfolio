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
          <div className={styles.project}>
            Geographic Information System Mapper
          </div>
          <div className={styles.project}>Array Visualizer in Memory</div>
          <div className={styles.project}>
            ML Model Development Application Interface
          </div>
          <div className={styles.project}>
            Prediction of Septic Shock using XGBoost
          </div>
          <div className={styles.project}>Capstone</div>
          <div className={styles.project}>Neural Network From Scratch</div>
          <div className={styles.project}>World Cup Draw Simulator</div>
          <div className={styles.project}>Text-To-Code</div>
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
