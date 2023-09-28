const AppError = require("./AppError.js");

function errorHandler(error, req, res, next) {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.log(error);

  return res.status(500).json({
    status: "error",
    message: "Internal server error!",
  });
}

module.exports = errorHandler;