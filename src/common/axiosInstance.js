const axios = require("axios");

const axiosInstance = axios.create({ baseURL: "https://api.steampowered.com" });

module.exports = { axiosInstance };
