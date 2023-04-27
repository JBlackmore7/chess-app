import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Modal from "./Modal";
import { useModal } from "./hooks";
import SignupForm from "./Forms";

const Navbar = () => {
  const { isShowing, toggle } = useModal();

  function send(e) {
    e.preventDefault();

    const form = e.target.value;
    const formData = new FormData(form);
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify({
      name: "Kelly Hansen",
      email: "lry@gmail.com",
      username: "Khanson",
      difficulty: 3,
    });
    console.log("json1", e);
    fetch("http://localhost:8000/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formDataJsonString,
    });
  }
  return (
    <div className={styles.navBar}>
      <li className={styles.homeLink}>
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
      </li>
      <li className={styles.contactLink}>
        <button
          className="loginModal"
          onClick={() => {
            toggle();
          }}
        >
          Log In
        </button>
        <Modal isShowing={isShowing} hide={toggle}>
          <SignupForm></SignupForm>
        </Modal>
      </li>
    </div>
  );
};
export default Navbar;
