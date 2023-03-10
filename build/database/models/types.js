"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _achievement = require("./Achievement/achievement.types");
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
var _game = require("./Game/game.types");
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
var _location = require("./Location/location.types");
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
var _mission = require("./Mission/mission.types");
Object.keys(_mission).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _mission[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mission[key];
    }
  });
});
var _hint = require("./Mission/Hint/hint.types");
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
var _target = require("./Mission/Target/target.types");
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
var _school = require("./School/school.types");
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
var _tclass = require("./Tclass/tclass.types");
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
var _user = require("./User/user.types");
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
var _userTeacher = require("./User/Teacher/user.teacher.types");
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
var _userPlayer = require("./User/Player/user.player.types");
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