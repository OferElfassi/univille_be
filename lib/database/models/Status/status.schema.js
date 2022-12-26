"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusSchema = void 0;
var _mongoose = require('mongoose');
var positionSchema = new _mongoose.Schema({
  x: Number,
  y: Number,
}, {
  _id: false,
});
var StatusSchema = new _mongoose.Schema({
  level: {
    type: Number,
    'default': 0,
  },
  score: {
    type: Number,
    'default': 0,
  },
  position: {
    type: positionSchema,
    'default': {
      x: 0,
      y: 0,
    },
  },
}, {
  _id: false,
});
exports.StatusSchema = StatusSchema;
