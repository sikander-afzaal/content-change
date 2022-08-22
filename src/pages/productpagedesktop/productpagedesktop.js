import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { green, purple } from "@material-ui/core/colors";
import {
  makeStyles,
  withStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import "./style.css";
import { productsArray } from "../ProductsPage/productsData";
function ProductPageDesktop() {
  const [data, setData] = useState({});
  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });
  const useStyles = makeStyles((theme) => ({}));
  const { id } = useParams();
  const classes = useStyles();

  const ColorButton = withStyles((theme) => ({
    root: {
      color: "black",
      backgroundColor: "#29BDAD",
      border: "1px solid",
      borderColor: "black",
      fontSize: "10px",
      borderRadius: "50px",
      padding: "5px 10px",
      "&:hover": {
        backgroundColor: "white",
      },
      "&:focus": {
        borderColor: "black",
      },
    },
  }))(Button);
  useEffect(() => {
    setData(
      productsArray.filter((elem) => {
        return elem.id === +id;
      })
    );
  }, []);

  return (
    <div className="container-fluid" style={{ padding: "0px 40px" }}>
      <div className="row">
        <div className="col-md-6 ">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src={data[0]?.slideImg1 || data[0]?.imageUrl}
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={`${data[0]?.imageUrl}`}
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={`${data[0]?.imageUrl}`}
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div className="col-md-6 ">
          <div className="leftdiv">
            <p className="subname">{data[0]?.category}</p>

            <p className="product-heading">{data[0]?.title}</p>
            {data[0]?.desc && (
              <p className="product-content">{data[0]?.desc}</p>
            )}
            {data[0]?.manage && (
              <>
                <h3>{data[0].manage.title}</h3>
                <ol>
                  {data[0].manage.list.map((item, index) => {
                    return <li key={"item" + index}>{item}</li>;
                  })}
                </ol>
              </>
            )}

            <div className="main10">
              <button className="btn1" style={{ marginRight: "15px" }}>
                <span className="spaninner">CHEEKS</span>
              </button>

              <button className="btn1" style={{ marginRight: "15px" }}>
                <span className="spaninner">EYE BAGS</span>
              </button>

              <button className="btn1" style={{ marginRight: "15px" }}>
                <span className="spaninner">BONE PART</span>
              </button>
            </div>

            <div className="measurement">
              <div className="measurements">
                <p className="pmeasure">Duration</p>

                <p className="pmeasure">{data[0]?.duration}</p>
              </div>
            </div>
            <div className="measurement">
              <div className="measurements">
                <p className="pmeasure">Price</p>

                <p className="pmeasure">{data[0]?.price}</p>
              </div>
            </div>

            <br />

            <button className="btn1">
              <span className="enquire">Inquire</span>
            </button>
            {data[0]?.content && (
              <div className="content-div">
                <h1>Course Content</h1>
                {data[0]?.content.map((elem, idx) => {
                  return (
                    <div key={"content" + idx}>
                      {elem.title ? (
                        <h2>{elem.title}:</h2>
                      ) : (
                        <h2>
                          Day {idx + 1} {elem.desc && elem.desc}
                        </h2>
                      )}
                      {elem.time && <h5>Time: {elem.time}</h5>}
                      {elem.list && (
                        <ul>
                          {elem.list.map((item, index) => {
                            return <li key={"item" + index}>{item}</li>;
                          })}
                        </ul>
                      )}
                      {elem.theory && (
                        <div className="sub-content">
                          <h3>Theory:</h3>
                          <p>{elem.theory}</p>
                        </div>
                      )}
                      {elem.practice && (
                        <div className="sub-content">
                          <h3>Practice:</h3>
                          <p>{elem.practice}</p>
                        </div>
                      )}
                      {elem.homework && (
                        <div className="sub-content">
                          <h3>Homework:</h3>
                          <p>{elem.homework}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
                {data[0]?.certificate && (
                  <div className="sub-content">
                    <h2>CERTIFICATE:</h2>
                    <p>{data[0]?.certificate}</p>
                  </div>
                )}
                {data[0]?.get && (
                  <div className="sub-content">
                    <h2>YOU WILL GET:</h2>
                    <p>{data[0]?.get}</p>
                  </div>
                )}
                {data[0]?.kit && (
                  <div className="sub-content">
                    <h2>Beginner Kit</h2>
                    <ol>
                      {data[0]?.kit.map((item, index) => {
                        return <li key={"item" + index}>{item}</li>;
                      })}
                    </ol>
                  </div>
                )}
              </div>
            )}
            <div className="roundborder">
              <div className="buttonlast">
                <p className="help">We are here to help</p>
                <p className="call">Give us ring</p>

                <img src="/images/whatsappicon.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPageDesktop;
