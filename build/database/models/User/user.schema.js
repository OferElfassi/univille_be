"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserSchema = void 0;
var _mongoose = require("mongoose");
var _db = require("../../db.utils");
var UserSchema = new _mongoose.Schema({
  id: {
    type: String
  },
  username: {
    type: String,
    required: [true, 'username is required']
  },
  fullName: {
    type: String,
    required: [true, 'fullName is required']
  },
  password: {
    type: String
  }
}, {
  timestamps: true,
  discriminatorKey: 'kind'
});
exports.UserSchema = UserSchema;
UserSchema.pre('save', _db.preSave);