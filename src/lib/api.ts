const axios = require("axios")

export const axiosInstance = axios.create({
  method: "get",
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": process.env.MICROCMS_API_KEY,
  },
});
