"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _player = require("./player.model");
Object.keys(_player).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _player[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _player[key];
    }
  });
});
var _player2 = require("./player.types");
Object.keys(_player2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _player2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _player2[key];
    }
  });
});