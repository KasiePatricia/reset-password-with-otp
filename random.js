require("dotenv").config()
const AES = require("crypto-js/aes")

const cipher1 = "U2FsdGVkX18cbBGijuMahZoUJ4hbWR2AXiVEoYGWZoABCVDCxrlSk/atDqIYerQP";
const cipher2 = "U2FsdGVkX1+eqDHXjSuUaLLzoZiKZ/ufUZmCj6gKwfLPPkY/UxXhcqk/ue1aW0VQ";

const userId1 = AES.decrypt(cipher1, process.env.cryptoSecret)
const userId2 = AES.decrypt(cipher2, process.env.cryptoSecret)

console.log({
    userId1,
    userId2
})