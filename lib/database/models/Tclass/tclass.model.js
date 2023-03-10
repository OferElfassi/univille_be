"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassModel = void 0;
var _mongoose = require("mongoose");
var _tclass = require("./tclass.schema");
var ClassModel = (0, _mongoose.model)('Tclass', _tclass.ClassSchema);
exports.ClassModel = ClassModel;