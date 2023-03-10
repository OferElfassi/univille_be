"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TargetSchema = void 0;
var _mongoose = require("mongoose");
var TargetSchema = new _mongoose.Schema({
  title: {
    type: String
  },
  location: {
    x: {
      type: Number
    },
    y: {
      type: Number
    }
  },
  image: {
    type: String
  }
});
exports.TargetSchema = TargetSchema;