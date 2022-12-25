"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = void 0;

var _mongoose = require("mongoose");

var _player = require("./player.schema");

var Player = (0, _mongoose.model)('Player', _player.PlayerSchema, 'players');
exports.Player = Player;