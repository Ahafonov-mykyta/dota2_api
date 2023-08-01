const { axiosInstance } = require("../common/axiosInstance");

const API_KEY = "8B7CCB94980C8EFBEEB368257D26F99F";
const getHeroes = async (req, res) => {
  try {
    const { data } = await axiosInstance.get(
      `/IEconDOTA2_570/GetHeroes/v0001/?key=${API_KEY}`
    );
    res.json(data);
  } catch (error) {
    res.json(error.code);
  }
};

module.exports = { getHeroes };
