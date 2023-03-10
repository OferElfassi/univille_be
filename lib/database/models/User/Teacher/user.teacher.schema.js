"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TeacherSchema = void 0;
var _mongoose = require("mongoose");
var TeacherSchema = new _mongoose.Schema({
  school: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'School'
  },
  "class": {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Class'
  }
}, {
  timestamps: true,
  discriminatorKey: 'kind'
});
exports.TeacherSchema = TeacherSchema;