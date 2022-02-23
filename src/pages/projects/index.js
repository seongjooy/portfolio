import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/home.module.css'


const Projects = () => {
  return (
      <Layout>
            <div className={styles.header} data-aos='slide-right'>
              <h2>
                My Projects
              </h2>
              <h3>
                Projects and what I've created
              </h3>
            </div>
      </Layout>
  )
}

export default Projects