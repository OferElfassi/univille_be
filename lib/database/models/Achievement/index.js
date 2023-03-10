"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _achievement = require("./achievement.types");
Object.keys(_achievement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _achievement[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _achievement[key];
    }
  });
});
var _achievement2 = require("./achievement.model");
Object.keys(_achievement2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _achievement2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _achievement2[key];
    }
  });
});
var _achievement3 = require("./achievement.schema");
Object.keys(_achievement3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _achievement3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _achievement3[key];
    }
  });
});