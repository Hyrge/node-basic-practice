const express = require("express");
const { main } = require("../controllers/mainController");
const router = express.Router();


router
  .route("/")
  .get(main);

module.exports = router;