require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3000,
  OFFICIAL_EMAIL: process.env.OFFICIAL_EMAIL,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY
};
