import React, { useEffect, useState } from "react";
import "./style.css";
import ProductCard from "./ProductCard";
import TablePagination from "@material-ui/core/TablePagination";
import { productsArray } from "./productsData";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/dist/css/splide.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
function ProductsPage() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalProducts, setTotalProducts] = useState(productsArray.length);
  const [displayProducts, setDisplayProducts] = useState(
    productsArray.slice(0, rowsPerPage)
  );

  const handleChangePage = (event, newPage) => {
    // console.log("new page", newPage)
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    //   console.log("page value==>", event.target.value)
  };

  useEffect(() => {
    console.log(" page=>", page);
    console.log("rows per page=>", rowsPerPage);
    console.log("from=>", page * rowsPerPage);
    console.log("to=>", (page + 1) * rowsPerPage);
    setDisplayProducts(
      productsArray.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, rowsPerPage]);
  console.log(displayProducts);
  return (
    <>
      <div className="banner-hero">
        <Fade top cascade delay={100}>
          {/* <h1>Nataliia Beauty</h1>
          <a href="https://bumpix.net/en/nataliiabeauty" target="blank">
            <FontAwesomeIcon icon={faCalendar} /> Book Online
          </a>
          <a href="https://wa.me/971529538096?text=" target="blank">
            <FontAwesomeIcon icon={faWhatsapp} /> Chat with us
          </a> */}
          <h1>Salon</h1>
          <h1>Academy</h1>
        </Fade>
      </div>{" "}
      <div className="about-hero">
        <h2>Who we are</h2>
        <p>
          Russian PRO-CERTIFIED coaches <br /> Dubai winner <br /> Semi
          Permanent Makeup | Eyelash extension | Nails professional trainings
        </p>
        <div className="row">
          <img src="./images/new/who1.png" alt="" />
          <img src="./images/new/who2.png" alt="" />
          <img src="./images/new/who3.png" alt="" />
        </div>
        <h3>
          We train eyelash extension <br /> nails and SPMU from zero. <br />{" "}
          Also we have upgraded courses. <br /> Choose a course which is
          suitable your level. <br /> <br /> We are certified bya KHDA
          government
        </h3>
        <div className="row">
          <img src={"/images/new/dubai1.png"} alt="" />
          <img src={"/images/new/dubai2.png"} alt="" />
        </div>
      </div>
      <div className="why about-hero">
        <h2>Why Choose Us</h2>
        <p>
          As we know Beauty Therapists demand is increasing nowadays, so this is
          our honest to provide a platform for them who really want to make a
          place in Beauty Industry and can get various opportunities. Our
          classes are taught by professional trainers who are internationally
          certified and each trainer is highly skilled. You will get theoretical
          as well as practical knowledge. We provide an education that teaches
          students up to date techniques, trends, methods. Our vision is to
          create expert professionals from the academy with extraordinary
          knowledge.
        </p>
        <h3>Fill this Form</h3>
        <form>
          <input type="text" placeholder="Enter your Name" />
          <input type="email" placeholder="Enter your Email" />
          <input type="number" placeholder="Enter your Number" />
          <button>Send</button>
        </form>
      </div>
      <div className="courses about-hero">
        <h2>Our Courses</h2>
        <Splide
          options={{
            width: "100%",
            perPage: 4,
            perMove: 1,
            gap: "1rem",
            arrows: true,
            drag: true,
            type: "loop",
            pagination: false,
            breakpoints: {
              1500: {
                perPage: 3,
              },
              1100: {
                perPage: 2,
              },
              725: {
                perPage: 1.5,
              },
              572: {
                perPage: 1,
              },
            },
          }}
        >
          {productsArray.map((v, i) => {
            return (
              <SplideSlide key={v.id}>
                <ProductCard product={v} id={i} />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      <div className="team-hero about-hero">
        <h2>Our Team</h2>{" "}
        <p>
          Our Trainer team is highly qualified and International certified. They
          are Experts in all beauty treatments, very enthusiastic and
          supportive. Their goal is to spread beauty by giving professional
          beauticians to the world by sharing their knowledge and experience.
        </p>
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
      <div className="fixed-bottom-what">
        <a href="https://wa.me/971529538096?text=" target="blank">
          {" "}
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </>
  );
}

export default ProductsPage;
