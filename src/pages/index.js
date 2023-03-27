import * as React from "react";
import * as styles from "../components/layout.module.css";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const HomePage = () => {
  return (
    <Layout pageHeading="" pageTitle="Home Page">
      <div className={styles.heroContainer}>
        <StaticImage
          src="../images/LogoMower.jpg"
          alt=""
          className={styles.content}
          style={{ width: "100px", marginRight: "20px" }}
        />
        <StaticImage
          src="../images/LogoLeaf.jpg"
          alt=""
          className={styles.content}
          style={{ width: "100px", marginRight: "20px" }}
        />
        <StaticImage
          src="../images/LogoBin.jpg"
          alt=""
          className={styles.content}
          style={{ width: "100px", marginRight: "20px" }}
        />
        <h1 className={styles.content} id={styles.heroHeader}>
          Perth Garden & Lawn Services
        </h1>
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
