"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchoolSchema = void 0;
var _mongoose = require("mongoose");
var _school = require("./school.methods");
var SchoolSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String
  },
  address: {
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
  classes: {
    type: [_mongoose.Schema.Types.ObjectId],
    "default": [],
    ref: 'Class'
  },
  teachers: {
    type: [_mongoose.Schema.Types.ObjectId],
    "default": [],
    ref: 'Class'
  }
}, {
  timestamps: true,
  statics: _school.statics,
  methods: _school.methods
});
exports.SchoolSchema = SchoolSchema;