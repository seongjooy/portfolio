import React from "react";
import * as styles from "../styles/global.css";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer className="footer" data-aos="fade-up">
        Seong Joo Yoon, 2022.
      </footer>
    </div>
  );
};

export default Layout;
