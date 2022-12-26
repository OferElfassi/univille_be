"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isError = void 0;
var isError = function isError(error, req, res, next) {
  console.log(error);
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.statusCode || 500);
  res.json({
    message: error.message || 'An unknown error occurred!'
  });
};
exports.isError = isError;