import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faLocationPin,
  faMapPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="wrapper">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={"/"} className="navbar-brand">
            <img className="logo" src="/images/logo.png" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
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
                <Link className="nav-link" to="/list">
                  Price List
                </Link>
              </li>
              <li className="nav-item pad">
                <Link to={"/about"} className="nav-link">
                  About-us
                </Link>
              </li>
              <li className="nav-item pad">
                <Link to={"/saloon"} className="nav-link">
                  Saloon
                </Link>
              </li>{" "}
              <li className="nav-item pad">
                <Link to={"/team"} className="nav-link">
                  Team
                </Link>
              </li>{" "}
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
              </li>{" "}
            </ul>
            <div className="row-loc mobile">
              <div className="box-loc">
                <FontAwesomeIcon icon={faLocationDot} />
                <a href="https://goo.gl/maps/NtWHwvJHreroUFuq9" target="blank">
                  Light Commercial Tower - Arjan dubai land.
                </a>
              </div>
              <div className="box-loc">
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+971529538096" target="blank">
                  +971 52 953 8096
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="location">
          <h3>Beauty Matters</h3>
          <div className="row">
            <div className="row-loc desktop">
              <div className="box-loc">
                <FontAwesomeIcon icon={faLocationDot} />
                <a href="https://goo.gl/maps/NtWHwvJHreroUFuq9" target="blank">
                  Light Commercial Tower - Arjan dubai land.
                </a>
              </div>
              <div className="box-loc">
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+971529538096" target="blank">
                  +971 52 953 8096
                </a>
              </div>
            </div>

            <div className="header-social">
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
              <a
                href="https://www.google.com/maps?q=Nataliia+beauty,+The+Light+Commercial+Tower+-+Shop.+3+-+Al+Barsha+South+-+Dubai&ftid=0x3e5f6f24a45556f9:0x30dd3952909407f6&hl=en&gl=pk&entry=gps&g_ep=CAISBjYuMzEuMxgA&shorturl=1"
                target="blank"
              >
                {" "}
                <FontAwesomeIcon icon={faLocationPin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
