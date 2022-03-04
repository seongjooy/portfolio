import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "gatsby";

const IndexPage = () => {
  React.useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <Layout>
      <section
        className={styles.header}
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className={styles.container}>
          <div className={styles.left}>
            <div>
              <h4>Student at the University of Toronto</h4>
              <h4>B.A.Sc, Computer Engineering</h4>
              <h5>seongjooyoon@gmail.com | seongjoo.yoon@mail.utoronto.ca</h5>
            </div>

            <img className={styles.dp} src="/github.png" alt=""></img>

            <div className="intro">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <a href="https://github.com/seongjooy" target="_blank">
              <img className={styles.btn} src="/github.png" />
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
            >
              <img className={styles.btn} src="/linkedin.png" />
            </a>
            <a href="https://www.instagram.com/_seongjoo/" target="_blank">
              <img className={styles.btn} src="/instagram.png" />
            </a>
            <a href="https://www.facebook.com/stephanseongjoo/" target="_blank">
              <img className={styles.btn} src="/facebook.png" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
