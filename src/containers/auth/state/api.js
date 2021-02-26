import axios from "axios";
import { getDefaultHeaders, processError } from "../../../utils/common";

export const SubmitCountry = async (data) => {
  try {
    const headers = getDefaultHeaders();
    console.log("in login",data);
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/name/${data.country}`,
      {
        headers,
      } 
    );
    console.log("response......loginn", response.data);
    return response.data;
  } catch (error) {
    console.log("error,,,,login.........,,,,", error.response.data.message);
    return processError(error);
  }
};

export const getCountryWeather = async (data) => {
  try {
    const city =[]
    data.data.map(item=>{
      if (item!==undefined) {
        city.push(item)
      }
    })
    console.log(city);
    const key = 'bf2806b64ed6e0b1b0fdfcfeaea23eb5'
    const headers = getDefaultHeaders();
    console.log("in login",data);
    const response = await axios.get(
      `http://api.weatherstack.com/current? access_key=${key}&query =${city[0]}`,
      {
        headers,
      } 
    );
    console.log("response......loginn", response.data);
    return response.data;
  } catch (error) {
    console.log("error,,,,login.........,,,,", error.response.data.message);
    return processError(error);
  }
};