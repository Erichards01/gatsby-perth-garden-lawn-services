import * as React from "react";
import * as styles from "../components/layout.module.css";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const HomePage = () => {
  return (
    <Layout pageHeading="" pageTitle="Home Page">
      <div className={styles.heroContainer}>
        <h1 className={styles.content}>Perth Garden and Lawn Services</h1>
        <StaticImage
          style={{
            position: "absolute",
            margin: "0",
            padding: "0",
            outline: "0",
          }}
          src="../images/Lawn3.jpg"
          alt="Large lawn surrounded by hedge"
          className={styles.backgroundImage}
        />
      </div>
    </Layout>
  );
};

export default HomePage;
