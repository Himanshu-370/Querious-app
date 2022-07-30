const express = require("express");
const router = express.Router();

const questionRouter = require("./Question");
const answerRouter = require("./Answer");

router.get("/", (req, res) => {
  res.send("This API is reserved for querious");
});

router.use("/questions", questionRouter);
router.use("/answers", answerRouter);

module.exports = router;
