const { users, forgotPasswordInfos } = require("../../models");
const { send } = require("../../util/sendEmail");
const otpGenerator = require('otp-generator');
const AES = require("crypto-js/aes");
require("dotenv").config();

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await users.findOne({ email });

    if (!user)
      return res.status(404).send({
        success: false,
        error: "no-user-found",
        message: "No user found with that email",
      });

    const otp = otpGenerator.generate(6, {
        digits: true,
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false
    })

    const cipherText = AES.encrypt(JSON.stringify(user._id), process.env.cryptoSecret).toString();

    await forgotPasswordInfos.create({
        userId: user._id,
        otp,
    });

    await send.sendMail({
      to: email,
      subject: "Password Reset",
      html: `
            <div>
                <h1>Password Reset</h1>
                <p>Click <a href="">here</a> to reset your password</p>
                <p>Cipher: ${cipherText}</p>
                <p>OTP: ${otp}</p>
            </div>
        `,
    });

    res.status(200).send({
      success: true,
      message: "Email sent Successfully!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      error: err.message,
      message: "Forgot password failed unexpectedly!",
    });
  }
};

module.exports = forgotPassword;
