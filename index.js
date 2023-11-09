const express = require("express");
const mongoose = require("mongoose");
// import the routes
const authRoute = require("./app/routes/auth");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

// connect to database
const { mongoUserName, password, clusterName, dbName } = process.env;
const mongoDB_URI = `mongodb+srv://${mongoUserName}:${password}@${clusterName}.mongodb.net/${dbName}`;
// console.log(mongoDB_URI);

mongoose
  .connect(mongoDB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(`Error connecting to database! `, err));

//  middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Reset password and OTP!");
});

// routes
app.use("/auth", authRoute);

const server = app.listen(port, () => console.log("listening on port", port));

module.exports = { app, mongoose };
