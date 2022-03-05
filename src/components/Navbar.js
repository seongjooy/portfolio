import { Link } from "gatsby";
import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1>Seong Joo Yoon</h1>
      <Link className="navbutton" to="/">
        Home
      </Link>
      <Link className="navbutton" to="/projects">
        Projects
      </Link>
      <Link className="navbutton" to="/experience">
        Experience
      </Link>
      <Link className="navbutton" to="/skills">
        Skills
      </Link>
    </nav>
  );
};

export default Navbar;
