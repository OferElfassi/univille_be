"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayerSchema = void 0;
var _mongoose = require("mongoose");
var _Status = require("../Status");
var _player = require("./player.statics");
var _player2 = require("./player.methods");
var PlayerSchema = new _mongoose.Schema({
  id: {
    type: String
  },
  username: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  fullName: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  group: {
    type: String
  },
  school: {
    type: String
  },
  city: {
    type: String
  },
  avatar: {
    type: String
  },
  status: {
    type: _Status.StatusSchema,
    "default": {
      level: 0,
      score: 0,
      position: {
        x: 0,
        y: 0
      }
    }
  }
}, {
  timestamps: true,
  statics: _player.statics,
  methods: _player2.methods
});
exports.PlayerSchema = PlayerSchema;