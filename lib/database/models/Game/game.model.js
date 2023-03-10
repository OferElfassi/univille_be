"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameModel = void 0;
var _mongoose = require("mongoose");
var _game = require("./game.schema");
var GameModel = (0, _mongoose.model)('Game', _game.GameSchema);
exports.GameModel = GameModel;