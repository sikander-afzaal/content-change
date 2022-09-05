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
  const eyelashes = [
    {
      name: "Classic Extension",
      img: "./images/new/feedback.png",
    },
    {
      name: "Eyelash extension & eyebrow lamination",
      img: "./images/new/offer.png",
    },
    {
      name: "2D Extension",
      img: "./images/new/feedback.png",
    },
    {
      name: "3D Extension",
      img: "./images/new/feedback.png",
    },
    {
      name: "Russian Volume",
      img: "./images/new/feedback.png",
    },
    {
      name: "Dramatic Volume",
      img: "./images/new/feedback.png",
    },
    {
      name: "Coloured Lashes",
      img: "./images/new/feedback.png",
    },
    {
      name: "LVL lashes & eyebrows",
      img: "./images/new/feedback.png",
    },
    {
      name: "Bottom Eyelashes",
      img: "./images/new/feedback.png",
    },
    {
      name: "Removal Eyelashes",
      img: "./images/new/feedback.png",
    },
    {
      name: "Home Visiting",
      img: "./images/new/feedback.png",
    },
  ];
  const manicure = [
    {
      name: "Removal",
      img: "./images/new/feedback.png",
    },
    {
      name: "Overlay nails",
      img: "./images/new/feedback.png",
    },
    {
      name: "Nails cleaning",
      img: "./images/new/feedback.png",
    },
    {
      name: "Nail Design",
      img: "./images/new/feedback.png",
    },
    {
      name: "Manicure",
      img: "./images/new/feedback.png",
    },
    {
      name: "Pedicure",
      img: "./images/new/feedback.png",
    },
    {
      name: "Acrylic Nails",
      img: "./images/new/feedback.png",
    },
    {
      name: "Nail Extension",
      img: "./images/new/feedback.png",
    },
    {
      name: "Home Visiting",
      img: "./images/new/feedback.png",
    },
  ];
  const makeup = [
    {
      name: "Consultation",
      img: "./images/new/feedback.png",
    },
    {
      name: "Eyebrow Shading",
      img: "./images/new/feedback.png",
    },
    {
      name: "Eyeliner",
      img: "./images/new/feedback.png",
    },
    {
      name: "Lips Blushing",
      img: "./images/new/feedback.png",
    },
    {
      name: "Removal",
      img: "./images/new/feedback.png",
    },
  ];
  const ColorButton = withStyles((theme) => ({
    root: {
      color: "#1B3644",
      backgroundColor: "white",
      border: "0.7px solid #1B3644",
      borderRadius: "100vh",
      padding: "0px",
      height: "50px",
      width: "150px",
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
        <h1>Eyelashes | Hair | Nails</h1>
        <h2>Russian PROs</h2>
        <h2>Dubai, UAE 2021 Winner</h2>
        <h2>Home visiting available</h2>{" "}
        <ColorButton variant="outlined">Book Online</ColorButton>
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
            <h1>Hair Extension</h1>
            <iframe
              src="https://www.youtube.com/embed/HOGFrrnE45g"
              title="Hair Extension | Nataliia Beauty Dubai"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h2>Working Hours:</h2>
            <h2>10 AM - 10PM</h2>
            <h2>How to book an appointment</h2>
            <div>
              <a
                href="https://instagram.com/nataliia.beauty?igshid=ODBkMDk1MTU="
                target="blank"
              >
                <button variant="outlined">
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </button>
              </a>
              <a href="https://wa.me/message/6PUPLGYDYM2OL1" target="blank">
                <button variant="outlined">
                  <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
                </button>
              </a>
              <a href="https://bumpix.net/en/nataliia.beauty" target="blank">
                <button variant="outlined">
                  <FontAwesomeIcon icon={faArrowRight} /> Online Booking
                </button>
              </a>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="hour-div">
            <h1>Manicure & Pedicure</h1>
            <iframe
              src="https://www.youtube.com/embed/dvW-mGamd94"
              title="17 July 2022"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h2>Working Hours:</h2>
            <h2>10 AM - 10PM</h2>
            <h2>How to book an appointment</h2>
            <div>
              <a
                href="https://instagram.com/nataliia.beauty?igshid=ODBkMDk1MTU="
                target="blank"
              >
                <button variant="outlined">
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </button>
              </a>
              <a href="https://wa.me/message/6PUPLGYDYM2OL1" target="blank">
                <button variant="outlined">
                  <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
                </button>
              </a>
              <a href="https://bumpix.net/en/nataliia.beauty" target="blank">
                <button variant="outlined">
                  <FontAwesomeIcon icon={faArrowRight} /> Online Booking
                </button>
              </a>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="hour-div">
            <h1>eyelash extension</h1>
            <iframe
              src="https://www.youtube.com/embed/yeBK3KjmH8E"
              title="“Nataliia.Beauty” Lash Center"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h2>Working Hours:</h2>
            <h2>10 AM - 10PM</h2>
            <h2>How to book an appointment</h2>
            <div>
              <a
                href="https://instagram.com/nataliia.beauty?igshid=ODBkMDk1MTU="
                target="blank"
              >
                <button variant="outlined">
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </button>
              </a>
              <a href="https://wa.me/message/6PUPLGYDYM2OL1" target="blank">
                <button variant="outlined">
                  <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
                </button>
              </a>
              <a href="https://bumpix.net/en/nataliia.beauty" target="blank">
                <button variant="outlined">
                  <FontAwesomeIcon icon={faArrowRight} /> Online Booking
                </button>
              </a>
            </div>
          </div>
        </SplideSlide>
      </Splide>
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
            <iframe
              style={{ width: "100%", height: "833px" }}
              src="https://www.youtube.com/embed/f2VqEjZWnac"
              title="Feedback 💕"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </SplideSlide>
          <SplideSlide>
            <iframe
              style={{ width: "100%", height: "833px" }}
              src="https://www.youtube.com/embed/j7nSNl2IIKE"
              title="Review 😘"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </SplideSlide>
          <SplideSlide>
            <iframe
              style={{ width: "100%", height: "833px" }}
              src="https://www.youtube.com/embed/1ru8MMQe1GA"
              title="Testimonial 🥰"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </SplideSlide>
        </Splide>
      </div>

      <h1 className="sal-head2">Our Services</h1>
      <div className="section-sal">
        <h1>Eyelash Extension</h1>
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
          {eyelashes.map((elem, idx) => {
            return (
              <SplideSlide key={"box-ser" + idx}>
                <div className="service-slide">
                  <img style={{ width: "100%" }} src={elem.img} alt="" />
                  <h1>{elem.name}</h1>
                  <ColorButton variant="outlined">Book Online</ColorButton>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      <div className="section-sal">
        <h1>Manicure & Pedicure</h1>
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
          {manicure.map((elem, idx) => {
            return (
              <SplideSlide key={"box-ser" + idx}>
                <div className="service-slide">
                  <img style={{ width: "100%" }} src={elem.img} alt="" />
                  <h1>{elem.name}</h1>
                  <ColorButton variant="outlined">Book Online</ColorButton>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      <div className="section-sal">
        <h1>Hair</h1>
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
          {makeup.map((elem, idx) => {
            return (
              <SplideSlide key={"box-ser" + idx}>
                <div className="service-slide">
                  <img style={{ width: "100%" }} src={elem.img} alt="" />
                  <h1>{elem.name}</h1>
                  <ColorButton variant="outlined">Book Online</ColorButton>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      <div className="section-sal">
        <h1>TEAM</h1>
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
              1257: {
                perPage: 2,
              },
              760: {
                perPage: 1.5,
              },
              580: {
                perPage: 1,
              },
            },
          }}
        >
          <SplideSlide>
            <div className="team-box">
              <img src="./images/new/team1.png" alt="" />
              <h2>NATALIIA</h2>
              <p>
                EYELASH EXTENSION TRAINER From UKRAINE with 10 years of
                experience. <br /> CEO at NATALIIA BEAUTY TRAINING <br /> Dubai
                winner <br />
                More than 50 happy students
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="team-box">
              <img src="./images/new/team2.png" alt="" />
              <h2>NATALIIA</h2>
              <p>
                SPMU technician From UKRAINE with 10 years of experience. <br />{" "}
                very friendly and cute <br /> Mom of one boy
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="team-box">
              <img src="./images/new/team3.png" alt="" />
              <h2>BALNUR</h2>
              <p>
                Manicure | pedicure technician From Kazakhstan with 8 years of
                experience. <br /> very friendly and cute <br /> Only Quality
                Service
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="team-box">
              <img src="./images/new/team4.png" alt="" />
              <h2>ELINA</h2>
              <p>
                Eyelash | eyebrow technician From Kazakhstan with 6 years of
                experience. <br /> 1 year with Nataliia Beauty <br /> Very
                Friendly and communicable <br /> Always stylish Mom of two boys
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="team-box">
              <img src="./images/new/team5.png" alt="" />
              <h2>ELMIRA</h2>
              <p>
                Eyelash | eyebrow technician From Kazakhstan with 3 years of
                experience. <br />
                very friendly and cute <br /> New in Dubai
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="team-box">
              <img src="./images/new/team6.png" alt="" />
              <h2>MIRA</h2>
              <p>
                Eyelash | eyebrow technician From Kyrgyzstan with 5 years of
                experience.
                <br /> 1 year with Nataliia Beauty <br /> Very Friendly and
                communicable <br /> Always cute Mom of two boys
              </p>
            </div>
          </SplideSlide>
        </Splide>
      </div>
      <img src="./images/new/map.png" className="map" alt="" />
    </div>
  );
}

export default Saloon;
