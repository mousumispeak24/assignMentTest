import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSagaAction } from "../state/actions";
import {
  Card,
  Container,
  Button,
  TextField,
  Typography,
  Grid,
  Box,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../style.css";

const AuthContainer = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isLoggedIn) {
    history.push("/showCapitalData");
  }
  //set hooks
  const { loginError, success } = useSelector((state) => state.auth);  
  const [country, setCountry] = useState("");
  const [countryValidationError, setCountryValidationError] = useState(false);

  //useEffect.......


  //validation
  const validate = () => {
    let isValid = true;
  
    if (!country) {
      setCountryValidationError(true);
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = () => {
    if (validate()) {
      const payload = {
        country,
      };
      dispatch(loginSagaAction(payload, history));
    }
  };
  const handleCountryChange = (event) => {
    if (countryValidationError) {
      setCountryValidationError(false);
    }
    // setSignUpError(false);
    setCountry(event.target.value);
  };
  return (
    <React.Fragment>
      <Container component="main">
        <Box component="div" className="overlayDiv">
          <Card className="mainCard">
            <div className="form-input-holder">
              <Grid container alignItems="center">
                <Grid item className="input-container">
                  <TextField
                    className="margin-bottom-0 margin-top-20 Mui-focused"
                    variant="standard"
                    id="input-password"
                    label="Enter Country"
                    type="text"
                    required
                    fullWidth
                    value={country}
                    onChange={handleCountryChange}
                    margin="normal"
                  />
                  {countryValidationError && (
                    <span className="error-msg padding-top-10">
                      {"Please enter valid Country"}
                    </span>
                  )}
                </Grid>
              </Grid>
            </div>
            <div className="form-input-holder padding-top-20">
              <Button
                className="btn-style"
                type="submit"
                fullWidth
                variant="contained"
                size="medium"
                color="primary"
                onClick={handleSubmit}
                disabled= {country===''?true:false}
              >
                {"SUBMIT"}
              </Button>
            </div>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
};
AuthContainer.propTypes = {
  // history: PropTypes.object.isRequired,
};
export default AuthContainer;
