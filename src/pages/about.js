import React from 'react'
import Layout from '../components/Layout'
import * as styles from "../styles/home.module.css"

const About = () => {
  return (
    <div>
      <Layout>
        <div className={styles.header} data-aos='slide-right'>
            <h2>
                About Me
            </h2>
            <p>
                Lorem ipsum
            </p>
        </div>
      </Layout>
    </div>
  )
}

export default About
