import React from "react";
import {
  makeStyles,
  withStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./style.css";

function ProductCard({ product }) {
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
    <div className="product-card">
      <img src={product.imageUrl} alt="" />
      <div className="card-text">
        <h1 className="title">{product.title}</h1>
        <p className="duration">{product.duration}</p>
        <p>{product.price}</p>
        <div className="row">
          <ColorButton variant="outlined">Book Now</ColorButton>
          <Link className="nav-link" to={`/productsdetails/${product.id}`}>
            <ColorButton variant="outlined">View Details</ColorButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
