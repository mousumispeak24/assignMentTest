import { put, takeEvery } from "redux-saga/effects";
import {
  LOGIN_SAGA_ACTION,
  COUNTRY_WEATHER_SAGA_ACTION,
    // SIGNUP_SAGA_ACTION,
} from "./types";
import {
  countrySubmitAction,
  loginErrorAction,
  authSuccessAction,
  countryWeatherSagaAction
} from "./actions";
import { SubmitCountry,getCountryWeather } from "./api";
import { SEVERITY_TYPES } from "../../../enums/severityTypes";

function* loginSagaHandler(action) {
  try {
    const { payload, history } = action;
    // login API
    console.log("in saga login",payload);
    const response = yield SubmitCountry(payload);
    if (response) {
      yield put(
        countrySubmitAction({
          isLoggedIn: true,
          countryDetails: response,
          countryName:payload.country
        })
      );
      history.push("/showCapitalData");
    } else {
      console.log("res in saga...........", response);
      yield put(
        loginErrorAction({
          message: response.message,
          severity: SEVERITY_TYPES.ERROR,
        })
      );
    }
  } catch (error) {}
}
function* countryWeatherSagaHandler(action) {
  try {
    const { payload, history } = action;
    // login API
    console.log("in saga login",payload);
    const response = yield getCountryWeather(payload);
    if (response) {
      yield put(
        countrySubmitAction({
          isLoggedIn: true,
          // weatherDetails: response,
        })
      );
      // history.push("/showCapitalData");
    } else {
      console.log("res in saga...........", response);
      yield put(
        loginErrorAction({
          message: response.message,
          severity: SEVERITY_TYPES.ERROR,
        })
      );
    }
  } catch (error) {}
}


export default function* watchAuth() {
  yield takeEvery(LOGIN_SAGA_ACTION, loginSagaHandler);
  yield takeEvery(COUNTRY_WEATHER_SAGA_ACTION, countryWeatherSagaHandler);

}
