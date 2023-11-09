const express = require("express");
const router = express.Router();
const { register, login, forgotPassword, resetPassword } = require("../controllers/auth");
const { validateRequest } = require("../middlewares");

router.post("/register",validateRequest("auth/register"), register);
router.post("/login",validateRequest("auth/login"), login);
router.post("/forgot-password", validateRequest("auth/forgot-password"), forgotPassword);
router.post("/reset-password", validateRequest("auth/reset-password"), resetPassword);

module.exports = router;
