import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/about.module.css";

const About = () => {
  return (
    <div>
      <Layout>
        <div className={styles.header} data-aos="slide-right">
          About Me
        </div>
        <div className={styles.intro} data-aos="slide-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor
          enim varius diam egestas, id lobortis eros elementum. Integer sit amet
          interdum risus. Aliquam ullamcorper, ipsum id ornare porttitor, magna
          turpis varius nisi, id interdum justo nisl quis risus. Curabitur
          iaculis neque diam, in eleifend ex viverra eget. Curabitur blandit est
          vitae est ultrices, eget feugiat enim volutpat. Phasellus molestie
          finibus augue feugiat pharetra. Praesent dictum eget tellus in
          sollicitudin. Ut enim purus, euismod vitae faucibus et, lobortis a
          felis. Nunc elit urna, congue a gravida non, bibendum nec quam. Nam
          comm
        </div>
      </Layout>
    </div>
  );
};

export default About;
