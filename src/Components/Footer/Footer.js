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
    <>
      <div
        className="container-fluid mobilewidth11"
        style={{ marginTop: "40px" }}
      >
        <div className="row bg12">
          <div className="col-md-12 bg-footer footercenter ">
            <div
              className="main121"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p className="textfooter">
                Suscríbete a <br />
                nuestro boletín
              </p>

              <div id="inner-circle">
                <img src="/images/SEND.png" width="32px" />
              </div>
            </div>
            <div className="form-group1">
              <CssEmailField
                id="custom-css-standard-input"
                label="Enter your email"
                type="email"
                fullWidth
              />

              <div className="inlinecheckbox">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Switch
                    checked={state.checkedB}
                    onChange={handleChange}
                    color="#fafafa"
                    name="checkedB"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />

                  <p className="footerprivacy">Acept privacy policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid mobilewidth11"
        style={{ backgroundColor: "#071116" }}
      >
        <div className="row" style={{ marginTop: "-2px" }}>
          <div
            className="col-md-12"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <p style={{ color: "#F9F9F9", opacity: "0.5" }}>+0000000000</p>
            <p>
              <span style={{ marginRight: "10px" }} class="dot"></span>
              <span class="dot"></span>
            </p>
          </div>
          <br />
          <p className="line">.</p>

          <br />
          <br />
        </div>
        <p className="lastheading">
          BELEVI ADDRESS: COMPANY NUMBER ETC.Privacy policy
        </p>
        <br />
      </div>
    </>
  );
}
export default Footer;
