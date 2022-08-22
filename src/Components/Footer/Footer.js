import React from "react";
import "./style.css";
import Switch from "@material-ui/core/Switch";
import {
  makeStyles,
  withStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { green, purple } from "@material-ui/core/colors";
import { OutlinedInput } from "@material-ui/core";
import { Link } from "react-router-dom";

function Footer() {
  const CssEmailField = withStyles({
    root: {
      "& label": {
        color: "#fafafa",
        opacity: "0.5",
      },
      "& label.Mui-focused": {
        color: "#fafafa",
      },
      "& .MuiInput-underline": {
        border: "1px solid #FAFAFA",
      },
      "& .MuiInput-underline:after": {
        border: "1px solid #FAFAFA",
        // borderBottomColor: '#fafafa',
      },
      "& .MuiInput-underline-150:after": {
        border: "1px solid #FAFAFA",
        // borderBottomColor: '#fafafa',
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#fafafa",
        },
        "&:hover fieldset": {
          borderColor: "#ffffff",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#ffffff",
        },
      },
    },
  })(TextField);

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="footer">
      <div className="links">
        <Link to={"/"}>Products</Link>
        <Link to={"/team"}>Team</Link>
        <Link to={"/about"}>About</Link>
      </div>
      <div
        className="container-fluid mobilewidth11"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className="lastheading" style={{ margin: "0" }}>
          BELEVI ADDRESS: COMPANY NUMBER ETC.Privacy policy
        </p>
        <br />
      </div>
    </div>
  );
}
export default Footer;
