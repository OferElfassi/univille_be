"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DBDisconnect = exports.DBConnect = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _utils = require("../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import * as Mongoose from 'mongoose';

var database;
var DBConnect = function DBConnect() {
  var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    dbName: process.env.DB_NAME
  };
  if (database) {
    return;
  }
  _mongoose["default"].set('strictQuery', true);
  _mongoose["default"].connect(process.env.DB_HOST, options).then(function () {
    database = _mongoose["default"].connection;
  })["catch"](function (e) {
    return console.log('DB connection error', e);
  });
  _mongoose["default"].connection.on('connected', function () {
    (0, _utils.dataInitialization)().then(console.log)["catch"](console.warn);
    console.log('Database connected');
  });
  _mongoose["default"].connection.on('error', function () {
    console.log('Error connecting to database');
  });
};
exports.DBConnect = DBConnect;
var DBDisconnect = function DBDisconnect() {
  if (!database) {
    return;
  }
  _mongoose["default"].disconnect().then(function () {
    return console.log('Database disconnected');
  })["catch"](function (e) {
    return console.error('Database failed to disconnected', e.message);
  });
};
exports.DBDisconnect = DBDisconnect;