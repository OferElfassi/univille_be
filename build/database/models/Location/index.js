"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _location = require("./location.types");
Object.keys(_location).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _location[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _location[key];
    }
  });
});
var _location2 = require("./location.schema");
Object.keys(_location2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _location2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _location2[key];
    }
  });
});