import React from "react";
import Layout from "../../components/Layout";
import { Link } from "gatsby";

const mapper = () => {
  return (
    <Layout>
      <Link className="navbutton" to="/projects">
        Back
      </Link>
    </Layout>
  );
};

export default mapper;
