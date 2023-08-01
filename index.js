const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 7777;

const app = express();

const { router: heroesRouter } = require("./src/routers/heroesRouter");
const {
  router: matchDetailsRouter,
} = require("./src/routers/matchDetailsRouter");
const { router: nicknamesRouter } = require("./src/routers/nicknamesRouter");
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

app.use("/api/heroes", heroesRouter);
app.use("/api/details", matchDetailsRouter);
app.use("/api/nicknames", nicknamesRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server work on adress: http://localhost:${PORT}`);
});
