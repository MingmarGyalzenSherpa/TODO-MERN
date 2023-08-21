const express = require("express");
const { signup, login, verifyUser } = require("../controller/authController");
const authRouter = express.Router();

authRouter.post("/signup", signup);

authRouter.post("/login", login);

authRouter.get("/verify_user", verifyUser);

module.exports = authRouter;
