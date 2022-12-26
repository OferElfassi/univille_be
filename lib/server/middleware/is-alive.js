"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAlive = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var isAlive = function isAlive(error, req, res, next) {
  try {
    res.status(200).json({
      message: 'success',
      state: 'up',
      uptime: Math.floor(process.uptime()),
      dbState: _mongoose["default"].STATES[_mongoose["default"].connection.readyState]
    });
  } catch (e) {
    next(e);
  }
};
exports.isAlive = isAlive;