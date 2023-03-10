"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _user = require("./user.types");
Object.keys(_user).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _user[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _user[key];
    }
  });
});
var _user2 = require("./user.model");
Object.keys(_user2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _user2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _user2[key];
    }
  });
});
var _userPlayer = require("./Player/user.player.types");
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
var _userTeacher = require("./Teacher/user.teacher.types");
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