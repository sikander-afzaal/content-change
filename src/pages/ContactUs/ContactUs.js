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

function Contact() {
  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });
  const useStyles = makeStyles((theme) => ({}));

  const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "black",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "black",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "red",
        },
        "&:hover fieldset": {
          borderColor: "yellow",
        },
        "&.Mui-focused fieldset": {
          borderColor: "green",
        },
      },
    },
  })(TextField);

  const ColorButton = withStyles((theme) => ({
    root: {
      color: "black",
      backgroundColor: "white",
      border: "1px solid",
      borderColor: "black",
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

  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <div className="container" style={{ marginTop: "40px" }}>
        <div className="row">
          <div className="col-md-1"></div>

          <div className="col-md-6">
            <h6 className="heading">Manos a la obra</h6>`
            <div className="formtab">
              <form>
                <div className="form-group">
                  <CssTextField
                    className={classes.margin}
                    id="custom-css-standard-input"
                    label="Full Name"
                    fullWidth
                  />
                </div>
                <div className="form-group">
                  <CssTextField
                    className={classes.margin}
                    id="custom-css-standard-input"
                    label="Email"
                    fullWidth
                  />
                </div>
                <div className="form-group">
                  <CssTextField
                    className={classes.margin}
                    id="custom-css-standard-input"
                    label="Phone Number"
                    fullWidth
                    type="number"
                    InputProps={{ inputProps: { min: 0, max: 10 } }}
                  />
                </div>
                <div className="form-group">
                  <CssTextField
                    className={classes.margin}
                    id="custom-css-standard-input"
                    label="Product / Course"
                    fullWidth
                  />
                </div>
                <div class="form-group">
                  <CssTextField
                    className={classes.margin}
                    id="custom-css-standard-input"
                    label="Message"
                    fullWidth
                    multiline
                    rows={2}
                    rowsMax={4}
                  />
                </div>

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
                      color="primary"
                      name="checkedB"
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />

                    <p className="privacytext">Accept privacy policy</p>
                  </div>

                  {/* <button type="submit" className="btn btn-form">Submit</button> */}
                  <ColorButton variant="outlined" className={classes.margin}>
                    Submit
                  </ColorButton>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-4">
            <img src="/images/sringe.png" className="imgcontact" />
          </div>

          <div className="col-md-1"></div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>

          <div className="col-md-6">
            <div className="formtab">
              <div>
                <p className="tof">Tired of fill forms</p>
                <p className="tof marginremove">Give us a ring: 0000000000</p>
              </div>
            </div>
          </div>

          <div className="col-md-4"></div>

          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
}
export default Contact;
