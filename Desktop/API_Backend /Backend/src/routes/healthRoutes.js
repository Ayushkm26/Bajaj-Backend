const express = require("express");
const { OFFICIAL_EMAIL } = require("../config/envConfig");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    is_success: true,
    official_email: OFFICIAL_EMAIL
  });
});

module.exports = router;