import axios from "axios";

export const weatherAPI = axios.create({
  baseURL: "http://api.airvisual.com/v2/",
  // `station?station={{STATION_NAME}}&city={{CITY_NAME}}&state={{STATE_NAME}}&country={{COUNTRY_NAME}}&key={{${818b3780-ced9-468e-83fb-a14b36c6d2f5}}}`
});