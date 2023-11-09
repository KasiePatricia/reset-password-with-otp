const { users, forgotPasswordInfos } = require("../../models");
const CryptoJS = require("crypto-js");
const AES = require("crypto-js/aes");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const resetPassword = async (req, res) => {
  try {
    const { newPassword, otp, cipherText } = req.body;
    
    const userId = JSON.parse(AES.decrypt(cipherText, process.env.cryptoSecret).toString(CryptoJS.enc.Utf8));

    const otpPresent = await forgotPasswordInfos.findOne({ userId });

    if (!otpPresent){
      return res.status(404).send({
        success: false,
        error: "no-record-found",
        message: "OTP not found",
      });
    }

    if (otpPresent.otp !== otp){
        return res.status(400).send({
          success: false,
          error: "no-otp-match",
          message: "OTP sent does not match record",
        });
      }

    const newHashedPassword = bcrypt.hashSync(
      newPassword,
      bcrypt.genSaltSync(10)
    );

    await users.findByIdAndUpdate(userId, {
      password: newHashedPassword,
    });

    await forgotPasswordInfos.findOneAndDelete({ userId });

    res.status(200).send({
      success: true,
      message: "Password changed successfully!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      error: err.message,
      message: "Reset Password failed unexpectedly!",
    });
  }
};

module.exports = resetPassword;
