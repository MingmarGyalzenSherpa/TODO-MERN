const User = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const appConfig = require("../config/appConfig");
//signup
exports.signup = async function (req, res) {
  const { user_name, email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    console.log(user);
    if (user) throw Error("User already exists");

    //hash the password
    const hashedPassword = await bcrypt.hash(password, 0);
    const newUser = await User.create({
      user_name,
      email,
      password: hashedPassword,
    });
    console.log(newUser);
    res
      .status(200)
      .json({ message: "User registered successfully", data: newUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
9;

exports.login = async function (req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    console.log(user);
    if (!user) throw new Error("User not found!");

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) throw new Error("Incorrect Password");

    const payload = {
      user: user._id,
      user_name: user.user_name,
    };
    const token = jwt.sign(payload, appConfig.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
    res.cookie("jwt", token, {
      maxAge: 1000 * 60 * 60,
      // httpOnly: true,
    });
    res.status(200).json({ message: "User found" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.logout = async (req, res) => {};

//verify user
exports.verifyUser = async (req, res) => {
  try {
    const jwt_token = req.cookies?.jwt;

    if (!jwt_token) {
      throw new Error("unauthorized");
    }
    const verified = jwt.verify(jwt_token, appConfig.JWT_SECRET_KEY);
    res.status(200).json({ message: "User verified" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

// check if user is logged in
//delete token from cookie
