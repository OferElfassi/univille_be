"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserModel = exports.TeacherModel = exports.PlayerModel = void 0;
var _mongoose = require("mongoose");
var _user = require("./user.schema");
var _user2 = require("./user.methods");
var _Player = require("./Player");
var _Teacher = require("./Teacher");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
_user.UserSchema.methods = _user2.userMethods;
_user.UserSchema.statics = _objectSpread(_objectSpread({}, _user.UserSchema.statics), _user2.userStatics);
_Player.PlayerSchema.methods = _Player.playerMethods;
_Player.PlayerSchema.statics = _objectSpread(_objectSpread({}, _Player.PlayerSchema.statics), _Player.playerStatics);
_Teacher.TeacherSchema.methods = _Teacher.teacherMethods;
_Teacher.TeacherSchema.statics = _objectSpread(_objectSpread({}, _Teacher.TeacherSchema.statics), _Teacher.teacherStatics);
var UserModel = (0, _mongoose.model)('User', _user.UserSchema, 'users');
exports.UserModel = UserModel;
var PlayerModel = UserModel.discriminator('Player', _Player.PlayerSchema);
exports.PlayerModel = PlayerModel;
var TeacherModel = UserModel.discriminator('Teacher', _Teacher.TeacherSchema);
exports.TeacherModel = TeacherModel;