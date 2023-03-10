"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MissionSchema = void 0;
var _mongoose = require("mongoose");
var _mission = require("./mission.methods");
var _Hint = require("./Hint");
var _Target = require("./Target");
var MissionSchema = new _mongoose.Schema({
  id: {
    type: String
  },
  index: {
    type: Number,
    "default": 0
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  target: _Target.TargetSchema,
  hints: [_Hint.HintSchema],
  score: {
    type: Number,
    "default": 1
  },
  scoreRatio: {
    type: Number,
    "default": 1
  }
}, {
  timestamps: true
});
exports.MissionSchema = MissionSchema;
Object.assign(MissionSchema.statics, _mission.statics);
Object.assign(MissionSchema.methods, _mission.methods);
// MissionSchema.pre('save', preSave);