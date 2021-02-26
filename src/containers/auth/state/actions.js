import {
  LOGIN_ACTION,
  LOGIN_SAGA_ACTION,
  SET_LOGIN_ERROR,
  SET_AUTH_SUCCESS,
  COUNTRY_WEATHER_ACTION,
  COUNTRY_WEATHER_SAGA_ACTION
} from "./types.js";

export const countrySubmitAction = (payload) => ({
  type: LOGIN_ACTION,
  payload,
});
export const loginErrorAction = (payload) => ({
  type: SET_LOGIN_ERROR,
  payload,
});
export const authSuccessAction = (payload) => ({
  type: SET_AUTH_SUCCESS,
  payload,
});
export const loginSagaAction = (payload, history) => ({
  type: LOGIN_SAGA_ACTION,
  payload,
  history,
});
export const countryWeatherSagaAction = (payload, history) => ({
  type: COUNTRY_WEATHER_SAGA_ACTION,
  payload,
  history,
});
export const countryWeatherAction = (payload, history) => ({
  type: COUNTRY_WEATHER_ACTION,
  payload,
});