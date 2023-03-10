"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _userPlayer = require("./user.player.methods");
Object.keys(_userPlayer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _userPlayer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _userPlayer[key];
    }
  });
});
var _userPlayer2 = require("./user.player.schema");
Object.keys(_userPlayer2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _userPlayer2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _userPlayer2[key];
    }
  });
});
var _userPlayer3 = require("./user.player.types");
Object.keys(_userPlayer3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _userPlayer3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _userPlayer3[key];
    }
  });
});