"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _tclass = require("./tclass.model");
Object.keys(_tclass).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _tclass[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tclass[key];
    }
  });
});
var _tclass2 = require("./tclass.types");
Object.keys(_tclass2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _tclass2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tclass2[key];
    }
  });
});
var _tclass3 = require("./tclass.schema");
Object.keys(_tclass3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _tclass3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tclass3[key];
    }
  });
});