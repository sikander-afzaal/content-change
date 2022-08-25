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
    <div>
      <div className="banner-hero">
        <Fade top cascade delay={100}>
          <h1>Nataliia Beauty</h1>
          <a href="https://bumpix.net/en/nataliiabeauty" target="blank">
            <FontAwesomeIcon icon={faCalendar} /> Book Online
          </a>
          <a href="https://wa.me/971529538096?text=" target="blank">
            <FontAwesomeIcon icon={faWhatsapp} /> Chat with us
          </a>
        </Fade>
      </div>{" "}
      <div className="logo-row">
        <Splide
          options={{
            type: "loop",
            width: "100%",
            perPage: "auto",
            arrows: false,
            autoScroll: {
              pauseOnHover: false,
              pauseOnFocus: false,
              rewind: false,
              speed: 1,
            },
            pagination: false,
          }}
          extensions={{ AutoScroll }}
        >
          <SplideSlide>
            <img src="./images/logo.png" alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src="./images/logo.png" alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src="./images/logo.png" alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src="./images/logo.png" alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src="./images/logo.png" alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src="./images/logo.png" alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src="./images/logo.png" alt="" />
          </SplideSlide>
        </Splide>
      </div>
      <div className="about-hero">
        <Fade right cascade delay={1000}>
          <h1>About Us</h1>
          <Link to="/about">About</Link>
        </Fade>
      </div>
      <div className="products-section" id="courses">
        <div className="container flex">
          <Fade top>
            <h1 className="heading-cont">Courses</h1>
          </Fade>
          <div
            className="row"
            style={{
              gap: "20px",
              padding: "40px 0px",
              alignItems: "flex-start",
              justifyContent: "space-evenly",
            }}
          >
            {displayProducts.map((v, i) => (
              <div key={i} className="col-md-4 p-0">
                <ProductCard product={v} id={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
