import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countryWeatherSagaAction } from "../state/actions";
import {
  Card,
  Container,
  Button,
  Box,
} from "@material-ui/core";
import "../style.css";

const AuthContainer = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const {countryDetails,countryName} = useSelector((state) => state.auth);

  //set hooks
  const [countryCapital, setCountryCapital] = useState("");


  //validation

  const handleWeatherSubmit = () => {
      const payload = {
        data:countryDetails.map(item => {
          if(item.name === countryName){
            return item.capital
          }
        }),
      };
      console.log(payload.data);
      dispatch(countryWeatherSagaAction(payload, history));
  };

  return (
    <React.Fragment>
      <Container component="main">
        <Box component="div" className="overlayDiv">
          {/* <Card className="mainCard"> */}
            <div>
            {countryDetails.length
                      && countryDetails.map((item) => (
                        <div>
                          {console.log(item.name === countryName)}
                          {item.name === countryName  &&(
                            <div>
                              {/* {handleCountryCapital(item.capital)} */}
                                <div className="form-input-holder">
                                  <div className="main-container">
                                    COUNTRY DETAILS
                                    <p>
                                      CAPITAL :  {item.name}
                                    </p>
                                    <p>
                                      POPULATION :  {item.population}
                                    </p>
                                    <p>
                                      LAT/LANG :  {item.latlng}
                                    </p>
                                    <div className="flagClass">
                                      <p>
                                        FLAG : 
                                      </p>
                                      <img
                                          style={{ height: "78px", width: "78px",marginLeft:"10px" }}
                                          src={item.flag}
                                          alt="close-icon"
                                        />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-input-holder padding-top-20">
                                  <Button
                                    className="btn-style"
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    size="medium"
                                    color="primary"
                                    onClick={handleWeatherSubmit}
                                  >
                                    {"CAPITAL WEATHER"}
                                  </Button>
                                </div>
                            </div>
                      )}
            </div>
            ))}
            </div>

          
          {/* </Card> */}
        </Box>
      </Container>
    </React.Fragment>
  );
};
AuthContainer.propTypes = {
  // history: PropTypes.object.isRequired,
};
export default AuthContainer;
