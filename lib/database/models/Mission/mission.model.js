"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MissionModel = void 0;
var _mongoose = require("mongoose");
var _mission = require("./mission.schema");
var MissionModel = (0, _mongoose.model)('Mission', _mission.MissionSchema, 'missions');
exports.MissionModel = MissionModel;