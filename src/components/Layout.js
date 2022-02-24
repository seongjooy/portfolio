import React, { Children } from "react";
import * as styles from "../styles/global.css";
import "./Layout.css";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="top-layer">
        <div className="page-title"> Title Goes Here</div>
        <Navbar></Navbar>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
