const { axiosInstance } = require("../common/axiosInstance");
const { API_KEY } = require("../../constants");

const getNicknames = async (req, res) => {
  const { accountID } = req.params;

  try {
    const response = await axiosInstance.get(
      `/ISteamUser/GetPlayerSummaries/v0002/?key=${API_KEY}&steamids=${accountID}`
    );

    const players = response.data.response.players;
    const accountIDMap = new Map();

    const ids = accountID.split(",");

    ids.forEach((id, index) => accountIDMap.set(id, index));
    players.sort((a, b) => {
      const indexA = accountIDMap.get(a.steamid);
      const indexB = accountIDMap.get(b.steamid);
      return indexA - indexB;
    });
    res.json(players);
  } catch (error) {
    res.json(error.code);
  }
};

module.exports = { getNicknames };
