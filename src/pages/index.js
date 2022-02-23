import * as React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { graphql, Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>
            Seong Joo Yoon
          </h2>
          <h3>
            personal website
          </h3>
          <p>
            canada
          </p>
          <Link className={styles.btn} to='/projects'>
            My portfolio projects
          </Link>
        </div>
        <img src="/facebook.png" alt="" style={{ width: '100px', height: '100px'}}></img>
      </section>
    </Layout>
  )
}
 
export default IndexPage

