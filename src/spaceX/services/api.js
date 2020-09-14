import axios from "axios";

export const getResults = (finalQuery) => {
  return axios.get(finalQuery);
};
