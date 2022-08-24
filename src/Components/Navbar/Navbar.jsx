import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="wrapper">
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

            <li className="pad header-social">
              <a
                target="blank"
                href="https://www.instagram.com/nataliia.beauty/?hl=en"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                target="blank"
                href="https://www.facebook.com/profile.php?id=100063574540308"
              >
                {" "}
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://wa.me/971529538096?text=" target="blank">
                {" "}
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
          </div>
        </nav>
        <div className="location">
          <div className="box-loc">
            <FontAwesomeIcon icon={faLocationDot} />
            <h2>Park View Tower, JVC</h2>
          </div>
          <div className="box-loc">
            <FontAwesomeIcon icon={faPhone} />
            <a href="https://wa.me/971529538096?text=" target="blank">
              +971 52 953 8096
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
