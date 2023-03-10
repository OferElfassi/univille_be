"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _school = require("./school.model");
Object.keys(_school).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _school[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _school[key];
    }
  });
});
var _school2 = require("./school.types");
Object.keys(_school2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _school2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _school2[key];
    }
  });
});
var _school3 = require("./school.schema");
Object.keys(_school3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _school3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _school3[key];
    }
  });
});