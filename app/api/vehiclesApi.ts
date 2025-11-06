import axios from "axios";

const vehiclesApi = axios.create({
  baseURL: "https://62a124397b9345bcbe46edcd.mockapi.io/shippify",
});

export { vehiclesApi };
