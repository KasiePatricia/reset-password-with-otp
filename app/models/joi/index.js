const {
    loginReqSchema,
    registerReqSchema,
    forgotPasswordReqSchema,
    resetPasswordReqSchema
} = require("./authJoiSchema");

module.exports = {
    "auth/login": loginReqSchema,
    "auth/register": registerReqSchema,
    "auth/forgot-password": forgotPasswordReqSchema,
    "auth/reset-password": resetPasswordReqSchema,
}