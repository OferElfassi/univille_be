"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocationSchema = void 0;
var _mongoose = require("mongoose");
var LocationSchema = new _mongoose.Schema({
  lat: {
    type: Number,
    "default": 32.067106
  },
  lng: {
    type: Number,
    "default": 34.825324
  },
  address: {
    type: String,
    "default": ''
  }
});
exports.LocationSchema = LocationSchema;