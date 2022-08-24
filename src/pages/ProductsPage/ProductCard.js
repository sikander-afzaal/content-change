import React from "react";
import {
  makeStyles,
  withStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "./style.css";

function ProductCard({ product }) {
  const ColorButton = withStyles((theme) => ({
    root: {
      color: "#1B3644",
      backgroundColor: "white",
      border: "0.7px solid #1B3644",
      borderRadius: "50px",
      padding: "5px 10px",
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
    <Fade left={product.left} right={product.right}>
      <div className="product-card">
        <div className="image">
          <img src={product.imageUrl} alt="" />
        </div>

        <div className="text mt-4">
          <p className="title">{product.title}</p>
          <p className="category">{product.category}</p>
          <Link className="nav-link" to={`/productsdetails/${product.id}`}>
            <ColorButton variant="outlined">Explore</ColorButton>
          </Link>
        </div>
      </div>
    </Fade>
  );
}

export default ProductCard;
