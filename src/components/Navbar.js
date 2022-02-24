import { Link } from "gatsby";
import React from "react";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
