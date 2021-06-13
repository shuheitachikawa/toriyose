const axios = require("axios")

export const axiosInstance = axios.create({
  method: "get",
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": process.env.micro_cms_x_api_key,
  },
});

export const axiosWriteInstance = axios.create({
  method: "post",
  headers: {
    "Content-Type": "application/json",
    "X-WRITE-API-KEY": process.env.micro_cms_x_write_api_key,
  },
});

export const wait1sec = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK")
    }, 1000)
  })
}