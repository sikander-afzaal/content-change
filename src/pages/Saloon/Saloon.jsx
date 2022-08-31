import React from "react";
import Button from "@material-ui/core/Button";
import "./Saloon.css";
import { withStyles } from "@material-ui/core/styles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/dist/css/splide.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Saloon() {
  const ColorButton = withStyles((theme) => ({
    root: {
      color: "#1B3644",
      backgroundColor: "white",
      border: "0.7px solid #1B3644",
      borderRadius: "100vh",
      padding: "0px",
      height: "50px",
      width: "100px",
      textTransform: "Capitalize",
      "&:hover": {
        backgroundColor: "white",
      },
      "&:focus": {
        borderColor: "black",
      },
    },
  }))(Button);
  return (
    <div className="saloon">
      <div className="box-saloon">
        <img src="/images/new/center.png" alt="" />
        <h2>Welcome to Nataliia Beauty Center</h2>
        <h1>Eyelashes | Semi Permanent Makeup | Nails</h1>
        <h2>Russian PROs</h2>
        <h2>Dubai, UAE 2021 Winner</h2>
        <h2>Home visiting available</h2>{" "}
        <ColorButton variant="outlined">Book Online</ColorButton>
      </div>
      <div className="section-sal">
        <h1 className="sal-head">OFFERS</h1>
        <div className="box-saloon">
          <img src="/images/new/offer.png" alt="" />
          <h1>Eyelash extension & eyebrow lamination</h1>
          <h3>AED 500</h3>
          <ColorButton variant="outlined">Book Online</ColorButton>
        </div>
      </div>
      <Splide
        options={{
          width: "100%",
          perPage: 3,
          perMove: 1,
          gap: "1rem",
          arrows: true,
          drag: true,
          type: "loop",
          pagination: false,
          breakpoints: {
            1547: {
              perPage: 2,
            },
            1100: {
              perPage: 1.5,
            },
            900: {
              perPage: 1,
            },
          },
        }}
      >
        <SplideSlide>
          <div className="hour-div">
            <h1>Semi Permanent Makeup</h1>
            <img src="/images/new/hour1.png" alt="" />
            <h2>Working Hours:</h2>
            <h2>10 AM - 10PM</h2>
            <h2>How to book an appointment</h2>
            <div>
              <button variant="outlined">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </button>
              <button variant="outlined">
                <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
              </button>
              <button variant="outlined">
                <FontAwesomeIcon icon={faArrowRight} /> Online Booking
              </button>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="hour-div">
            <h1>Manicure & Pedicure</h1>
            <img src="/images/new/hour2.png" alt="" />
            <h2>Working Hours:</h2>
            <h2>10 AM - 10PM</h2>
            <h2>How to book an appointment</h2>
            <div>
              <button variant="outlined">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </button>
              <button variant="outlined">
                <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
              </button>
              <button variant="outlined">
                <FontAwesomeIcon icon={faArrowRight} /> Online Booking
              </button>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="hour-div">
            <h1>eyelash extension</h1>
            <img src="/images/new/hour3.png" alt="" />
            <h2>Working Hours:</h2>
            <h2>10 AM - 10PM</h2>
            <h2>How to book an appointment</h2>
            <div>
              <button variant="outlined">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </button>
              <button variant="outlined">
                <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
              </button>
              <button variant="outlined">
                <FontAwesomeIcon icon={faArrowRight} /> Online Booking
              </button>
            </div>
          </div>
        </SplideSlide>
      </Splide>
      <div className="section-sal">
        <h1 className="sal-head">Why Customers are choosing us</h1>
        <Splide
          options={{
            width: "100%",
            perPage: 3,
            perMove: 1,
            gap: "1rem",
            arrows: true,
            drag: true,
            type: "loop",
            pagination: false,
            breakpoints: {
              1547: {
                perPage: 2,
              },
              1100: {
                perPage: 1.5,
              },
              900: {
                perPage: 1,
              },
            },
          }}
        >
          <SplideSlide>
            <img
              style={{ width: "100%" }}
              src="./images/new/why-choose.png"
              alt=""
            />
          </SplideSlide>
        </Splide>
      </div>
      <div className="section-sal">
        <h1 className="sal-head">Feedbacks</h1>
        <Splide
          options={{
            width: "100%",
            perPage: 3,
            perMove: 1,
            gap: "1rem",
            arrows: true,
            drag: true,
            type: "loop",
            pagination: false,
            breakpoints: {
              1547: {
                perPage: 2,
              },
              1100: {
                perPage: 1.5,
              },
              900: {
                perPage: 1,
              },
            },
          }}
        >
          <SplideSlide>
            <img
              style={{ width: "100%" }}
              src="./images/new/feedback.png"
              alt=""
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default Saloon;
