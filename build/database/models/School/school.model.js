"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchoolModel = void 0;
var _mongoose = require("mongoose");
var _school = require("./school.schema");
var SchoolModel = (0, _mongoose.model)('School', _school.SchoolSchema, 'schools');
exports.SchoolModel = SchoolModel;