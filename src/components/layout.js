import * as React from "react";
import { Link } from "gatsby";

const Layout = () => {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>{" "}
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <h1>Perth-Garden-and-Lawn-Services</h1>
    </main>
  );
};

export default Layout;
