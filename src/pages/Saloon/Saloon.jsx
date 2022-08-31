import React from "react";
import Button from "@material-ui/core/Button";
import "./Saloon.css";
import { withStyles } from "@material-ui/core/styles";
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
          <img src="/images/new/center.png" alt="" />
          <h1>Eyelash extension & eyebrow lamination</h1>
          <h3>AED 500</h3>
          <ColorButton variant="outlined">Book Online</ColorButton>
        </div>
      </div>
    </div>
  );
}

export default Saloon;
