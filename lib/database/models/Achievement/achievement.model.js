"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AchievementModel = void 0;
var _mongoose = require("mongoose");
var _achievement = require("./achievement.schema");
var AchievementModel = (0, _mongoose.model)('Achievement', _achievement.AchievementSchema);
exports.AchievementModel = AchievementModel;