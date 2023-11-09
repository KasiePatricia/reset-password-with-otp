const axios = require("axios");
// const { app, server, mongoose } = require("../../index");
// const { users } = require("../models");

const email = "ugwu_kasie@yahoo.com";
   
const registerBody = {
  email,
  userName: "mandy46",
  password: "mandy46",
  phonenumber: "07089676778",
}

const loginBody =  {
  userName: "mandy46",
  password: "mandy46",
}


// register
test("for successful registration", async () => {
  expect.assertions(2)
  try {
    const response = await axios.post("http://localhost:4000/auth/register", registerBody,
    {
      headers: {
        "Content-Type": "application/json",
      },
    });
   
    expect(response.status).toBe(201);
    expect(response.data.success).toBe(true);
  } catch (error) {
    console.log(error)
  }
});

// login
test("for successful login", async () => {
  expect.assertions(2)
  try {
    const response = await axios.post("http://localhost:4000/auth/login", loginBody, 
    {
      headers: {
        "Content-Type": "application/json",
      },
    });

    expect(response.status).toBe(200);
    expect(response.data.message).toBe("Login successful");
  } catch (error) {
    console.log(error)
  }
});

// forgot password
test("for successful forgot password request", async () => {
  expect.assertions(2);
  try {

    const response = await axios.post(
      "http://localhost:4000/auth/forgot-password", {email},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("first", response.data)

    expect(response.status).toBe(200);
    expect(response.data.message).toBe("Email sent Successfully!");
  } catch (error) {
    console.log(error)
  }
});

// reset password
// test("for successful reset password request", async () => {
//   expect.assertions(2);
//   try {

//     const response = await axios.post("http://localhost:4000/auth/reset-password", 
//     {cipherText: "U2FsdGVkX1/v7VQNu3chjDQnYU3pP62ElVY3kNOHvH5xKcpJR0IdI25Ncx5rN7qs", otp: "423020", newPassword: "helloT4545"},  {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     expect(response.status).toBe(200);
//     expect(response.data.message).toBe("Password changed successfully!");
//   } catch (error) {
//     console.log(error)
//   }
// });



