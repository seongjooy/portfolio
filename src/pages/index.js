import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

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
        <div>
          <h2>Seong Joo Yoon</h2>
          <h4>Student at the University of Toronto</h4>
          <h4>BASc, Computer Engineering</h4>
          <h5>seongjooyoon@gmail.com | seongjoo.yoon@mail.utoronto.ca</h5>
        </div>

        <img
          src="/github.png"
          alt=""
          style={{ width: "200px", height: "200px" }}
        ></img>

        <div className="intro">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
