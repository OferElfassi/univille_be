"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _status = require("./status.types");

Object.keys(_status).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _status[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _status[key];
    }
  });
});

var _status2 = require("./status.schema");

Object.keys(_status2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _status2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _status2[key];
    }
  });
});