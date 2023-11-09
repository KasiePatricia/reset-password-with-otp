const bcrypt = require("bcryptjs");
const { users } = require("../../models");

async function register(req, res) {
  try {
    const { email, userName, password, phonenumber } = req.body;

    const existingUserName = await users.findOne({ userName });

    if (existingUserName) {
      return res.status(409).send({
        success: false,
        error: "Username already exists",
        message: "Sign up failed!",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // register
    await users.create({
      email,
      userName,
      password: hashedPassword,
      phonenumber,
    });

    res.status(201).send({
      success: true,
      message: "User account created successfully!",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      error: err.message,
      message: "Sign up failed unexpectedly!",
    });
  }
}

module.exports = register;
