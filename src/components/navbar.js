import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navBar}>
      <li className={styles.homeLink}>
        <Link to="/chess-app" style={{ textDecoration: "none" }}>
          Home
        </Link>
      </li>
      <li className={styles.contactLink}>
        <Link to="/chess-app/contact" style={{ textDecoration: "none" }}>
          Contact
        </Link>
      </li>
    </div>
  );
};
export default Navbar;
