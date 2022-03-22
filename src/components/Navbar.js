import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar shadow-sm navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand user-select-none" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <small className="text-muted user-select-none">
                  <em>by Suryaaditya Pandit</em>
                </small>
              </li>
              {/* <li className="nav-item">
                <a
                  className={`nav-link ${
                    window.location.pathname === "/" ? "active" : " "
                  }`}
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li> */}
              {/* <li className="nav-item">
                 <Link
                  className={`nav-link ${
                    props.state === "/about" ? "active" : " "
                  }`}
                  to="/about"
                >
                  {props.aboutText}
                </Link> 
              </li> */}
            </ul>

            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                style={{ cursor: "pointer" }}
                onClick={props.toggleMode}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                style={{ cursor: "pointer" }}
                className="form-check-label user-select-none"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "TextUtils",
  aboutText: "About",
};
