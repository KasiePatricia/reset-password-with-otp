const sendMail = require("nodemailer");
const config = require("../config/auth.config");
require("dotenv").config();

const options = {
  service: "gmail",
  auth: {
    // user: config.user,
    // pass: config.pass,
    user: process.env.emailUser,
    pass: process.env.emailPassword,
  },
};

const send = sendMail.createTransport(options);

module.exports = { send };
