"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  GameModel: true,
  MissionModel: true,
  ClassModel: true,
  SchoolModel: true,
  UserModel: true,
  PlayerModel: true,
  TeacherModel: true
};
Object.defineProperty(exports, "ClassModel", {
  enumerable: true,
  get: function get() {
    return _Tclass.ClassModel;
  }
});
Object.defineProperty(exports, "GameModel", {
  enumerable: true,
  get: function get() {
    return _Game.GameModel;
  }
});
Object.defineProperty(exports, "MissionModel", {
  enumerable: true,
  get: function get() {
    return _Mission.MissionModel;
  }
});
Object.defineProperty(exports, "PlayerModel", {
  enumerable: true,
  get: function get() {
    return _User.PlayerModel;
  }
});
Object.defineProperty(exports, "SchoolModel", {
  enumerable: true,
  get: function get() {
    return _School.SchoolModel;
  }
});
Object.defineProperty(exports, "TeacherModel", {
  enumerable: true,
  get: function get() {
    return _User.TeacherModel;
  }
});
Object.defineProperty(exports, "UserModel", {
  enumerable: true,
  get: function get() {
    return _User.UserModel;
  }
});
var _Game = require("./Game");
var _Mission = require("./Mission");
var _Tclass = require("./Tclass");
var _School = require("./School");
var _User = require("./User");
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});