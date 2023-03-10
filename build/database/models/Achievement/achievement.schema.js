"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AchievementSchema = void 0;
var _mongoose = require("mongoose");
var _achievement = require("./achievement.methods");
var AchievementSchema = new _mongoose.Schema({
  id: {
    type: String
  },
  game: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Game'
  },
  mission: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Mission'
  },
  player: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'player'
  },
  duration: {
    type: Number,
    "default": 0
  },
  score: {
    type: Number,
    "default": 0
  },
  playerTotal: {
    type: Number,
    "default": 0
  }
}, {
  timestamps: true,
  statics: _achievement.statics,
  methods: _achievement.methods
});
exports.AchievementSchema = AchievementSchema;