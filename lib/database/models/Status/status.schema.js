"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusSchema = void 0;

var _mongoose = require("mongoose");

var StatusSchema = new _mongoose.Schema({
  level: {
    type: Number,
    "default": 0
  },
  score: {
    type: Number,
    "default": 0
  },
  position: {
    type: {
      x: Number,
      y: Number
    },
    "default": {
      x: 0,
      y: 0
    }
  }
});
exports.StatusSchema = StatusSchema;