"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassSchema = void 0;
var _mongoose = require("mongoose");
var _tclass = require("./tclass.methods");
var ClassSchema = new _mongoose.Schema({
  id: {
    type: String
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  score: {
    type: Number,
    "default": 0
  },
  teachers: {
    type: [_mongoose.Schema.Types.ObjectId],
    "default": [],
    ref: 'Teacher'
  },
  players: {
    type: [_mongoose.Schema.Types.ObjectId],
    "default": [],
    ref: 'Player'
  },
  school: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'School'
  }
}, {
  timestamps: true,
  statics: _tclass.statics,
  methods: _tclass.methods
});
exports.ClassSchema = ClassSchema;