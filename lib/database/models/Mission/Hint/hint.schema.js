"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HintSchema = void 0;
var _mongoose = require("mongoose");
var HintSchema = new _mongoose.Schema({
  index: {
    type: Number
  },
  hint: {
    type: String
  },
  type: {
    type: String
  },
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
exports.HintSchema = HintSchema;