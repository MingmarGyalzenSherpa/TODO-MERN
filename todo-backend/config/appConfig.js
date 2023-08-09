const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  CLIENT_URL: process.env.CLIENT_URL,
  DB_URL: process.env.DB_URL,
  PORT: process.env.PORT,
};
