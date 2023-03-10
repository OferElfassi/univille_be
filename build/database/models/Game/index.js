"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _game = require("./game.types");
Object.keys(_game).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _game[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _game[key];
    }
  });
});
var _game2 = require("./game.model");
Object.keys(_game2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _game2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _game2[key];
    }
  });
});
var _game3 = require("./game.schema");
Object.keys(_game3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _game3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _game3[key];
    }
  });
});