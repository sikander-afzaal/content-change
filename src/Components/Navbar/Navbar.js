import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={"/"} className="navbar-brand">
          <img className="logo" src="/images/logo.png" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          style={{ marginRight: "10px" }}
          id="navbarNav"
        >
          <ul
            className="nav navbar-nav ml-auto"
            style={{ marginRight: "10px" }}
          >
            <li className="nav-item pad">
              <Link className="nav-link" to="/">
                Products
              </Link>
            </li>
            <li className="nav-item pad">
              <Link to={"/about"} className="nav-link">
                About-us
              </Link>
            </li>{" "}
            <li className="nav-item pad">
              <Link to={"/team"} className="nav-link">
                Team
              </Link>
            </li>
            <li className="nav-item pad">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <li
            className="pad "
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              listStyle: "none",
              paddingRight: "20px",
            }}
          >
            <img src="/images/icon.png" className="icon1" />
            <li>En</li>
          </li>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
