import * as React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>
            Design
          </h2>
          <h3>
            UI and UX Deployment
          </h3>
          <p>
            Web developer based in Manchester
          </p>
          <Link className={styles.btn} to='/projects'>
            My portfolio projects
          </Link>
        </div>
        <img src="/facebook.png" alt="" style={{ width: '100px', height: '200px'}}></img>
      </section>
    </Layout>
  )
}
 
export default IndexPage
