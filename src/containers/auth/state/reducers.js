import {
  LOGIN_ACTION,
  SET_LOGIN_ERROR,
  SET_AUTH_SUCCESS,
  COUNTRY_WEATHER_ACTION,

} from "./types.js";

const initialState = {
  isLoggedIn: false,
  country: "",
  loginError: {},
  signUpError: {},
  success: {},
  countryDetails:[],
  countryName:'',
  weatherDetails:''
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return { ...state, ...action.payload };
    case SET_LOGIN_ERROR:
      return { ...state, loginError: action.payload };
    case SET_AUTH_SUCCESS:
      return { ...state, success: action.payload };
    case   COUNTRY_WEATHER_ACTION:
      return { ...state, success: action.payload };
    default:
      return { ...state };
  }
};
