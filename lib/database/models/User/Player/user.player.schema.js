"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayerSchema = void 0;
var _mongoose = require("mongoose");
var _Location = require("../../Location");
// import { LocationSchema, UserModel } from '../..';

var PlayerSchema = new _mongoose.Schema({
  group: {
    type: String
  },
  school: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'School'
  },
  "class": {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Class'
  },
  avatar: {
    type: String
  },
  score: {
    type: Number,
    "default": 0
  },
  location: {
    type: _Location.LocationSchema,
    "default": {
      lat: 0,
      lng: 0,
      address: ''
    }
  },
  achievements: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Achievement'
  }],
  currentGame: {
    game: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'Game'
    },
    currentMission: {
      mission: {
        type: _mongoose.Schema.Types.ObjectId,
        ref: 'Mission'
      }
    },
    startTime: Date,
    endTime: Date
  }
}, {
  timestamps: true,
  discriminatorKey: 'kind'
});
exports.PlayerSchema = PlayerSchema;