"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _hint = require("./hint.types");
Object.keys(_hint).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _hint[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _hint[key];
    }
  });
});
var _hint2 = require("./hint.schema");
Object.keys(_hint2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _hint2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _hint2[key];
    }
  });
});