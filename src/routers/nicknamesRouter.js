const express = require("express");
const router = express.Router();
const { getNicknames } = require("../controllers/nicknamesController");

router.get(`/:accountID`, getNicknames);

module.exports = { router };
