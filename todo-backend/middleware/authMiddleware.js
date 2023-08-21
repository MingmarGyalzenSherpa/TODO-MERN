const jwt = require("jsonwebtoken");
const appConfig = require("../config/appConfig");
function authMidddleware(req, res, next) {
  const jwt_token = req.cookies.jwt;
  const decoded = jwt.verify(jwt_token || "", appConfig.JWT_SECRET_KEY);
  req.body.user_id = decoded.user;
  next();
}

module.exports = authMidddleware;
