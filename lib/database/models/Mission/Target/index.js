"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _target = require("./target.types");
Object.keys(_target).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _target[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _target[key];
    }
  });
});
var _target2 = require("./target.schema");
Object.keys(_target2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _target2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _target2[key];
    }
  });
});