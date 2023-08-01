const express = require("express");
const router = express.Router();
const { getHeroes } = require("../controllers/heroesController");

router.get(`/`, getHeroes);

module.exports = { router };
