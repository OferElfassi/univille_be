"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _player = require("./player.controller");
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