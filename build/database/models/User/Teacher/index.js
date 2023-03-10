"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _userTeacher = require("./user.teacher.methods");
Object.keys(_userTeacher).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _userTeacher[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _userTeacher[key];
    }
  });
});
var _userTeacher2 = require("./user.teacher.schema");
Object.keys(_userTeacher2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _userTeacher2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _userTeacher2[key];
    }
  });
});
var _userTeacher3 = require("./user.teacher.types");
Object.keys(_userTeacher3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _userTeacher3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _userTeacher3[key];
    }
  });
});