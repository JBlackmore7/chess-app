import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Modal from "./Modal";
import { useModal } from "./hooks";

const Navbar = () => {
  const { isShowing, toggle } = useModal();

  function send(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);

    fetch("http://localhost:8000/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formDataJsonString,
    });

    // const submitMessage = document.querySelector("#log");
    // submitMessage.classList.add("show");
    // window.setTimeout(function () {
    //   location.reload();
    // }, 2000);

    // setTimeout(fetch(form.action, fetchOptions), 2000);
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
          <div className="container">
            <div className="title">Create Account</div>
            <form method="post" onSubmit={send} id="loginForm">
              <div className="formDetails">
                <div className="inputBox">
                  <label htmlFor="Name">Name</label>
                  <input type="text" className="name" id="name" placeholder="Enter full name" required />
                </div>
                <div className="inputBox">
                  <label htmlFor="Email">Email</label>
                  <input type="email" className="email" id="email" placeholder="Enter email address" required />
                </div>
                <div className="inputBox">
                  <label htmlFor="Username">Username</label>
                  <input type="text" className="username" id="username" placeholder="Enter username" required />
                </div>
                <div className="inputBox">
                  <label htmlFor="contactNumber">Difficulty Level</label>
                  <select className="difficulty" id="difficulty" required>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                    <option value="Grandmaster">Grandmaster</option>
                  </select>
                </div>
                <div className="button">
                  <label htmlFor="btn"></label>
                  <input type="submit" className="submit" id="btn" value="Create" />
                </div>
              </div>
            </form>
          </div>
        </Modal>
        {/* <Link to="/login" style={{ textDecoration: "none" }}>
          Log In
        </Link> */}
      </li>
    </div>
  );
};
export default Navbar;
