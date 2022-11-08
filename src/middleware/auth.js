const createError = require("http-errors");

const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const {jwt_secret} = require('../config');


exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    // return next(createError(401, "Login first to access this resource"));
    res.status(401).json({
        success: false,
        message: "Login first to access this resource"
    })
  }

  const decodedData = jwt.verify(token, jwt_secret);

  req.user = await User.findById(decodedData.id);

  next();
});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        // return next(
        //    createError(403, `Role (${req.user.role}) is not allowed to access this resource`)
        //   );
        res.status(403).json({
            success: false,
            message: `Role (${req.user.role}) is not allowed to access this resource`
        })
    }

    next();
  };
};