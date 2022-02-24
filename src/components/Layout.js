import React, { Children } from "react";
import * as styles from "../styles/global.css";
import "./Layout.css";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="content">{children}</div>
      <nav className="nav">
        <Link className="navbutton" to="/">
          Home
        </Link>
        <Link className="navbutton" to="/about">
          About
        </Link>
        <Link className="navbutton" to="/projects">
          Projects
        </Link>
        <Link className="navbutton" to="/experience">
          Experience
        </Link>
      </nav>
    </div>
  );
};

export default Layout;
