"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameSchema = void 0;
var _mongoose = require("mongoose");
var _game = require("./game.methods");
var GameSchema = new _mongoose.Schema({
  code: {
    type: String,
    required: [true, 'Code is required'],
    unique: true
  },
  name: {
    type: String,
    required: [true, 'game name is required']
  },
  startTime: {
    type: Date
  },
  duration: {
    type: Number
  },
  colors: [{
    type: String
  }],
  missions: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Mission',
    autopopulate: true
  }],
  players: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Player'
  }],
  teacher: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    autopopulate: true
  }
}, {
  timestamps: true,
  statics: _game.statics,
  methods: _game.methods
});
exports.GameSchema = GameSchema;