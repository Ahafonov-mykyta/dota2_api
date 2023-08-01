const express = require("express");
const router = express.Router();
const { getMatchDetails } = require("../controllers/matchDetailsController");

router.get(`/:matchId`, getMatchDetails);

module.exports = { router };
