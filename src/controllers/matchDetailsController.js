const { axiosInstance } = require("../common/axiosInstance");

const API_KEY = "8B7CCB94980C8EFBEEB368257D26F99F";
const getMatchDetails = async (req, res) => {
  const { matchId } = req.params;

  try {
    const { data } = await axiosInstance.get(
      `/IDOTA2Match_570/GetMatchDetails/v1?match_id=${matchId}&key=${API_KEY}`
    );
    res.json(data);
  } catch (error) {
    res.json(error.code);
  }
};

module.exports = { getMatchDetails };
