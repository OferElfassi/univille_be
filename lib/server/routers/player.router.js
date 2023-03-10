"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playerRouter = void 0;
var _express = require("express");
var _controllers = require("../controllers");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PlayerRouter = /*#__PURE__*/function () {
  function PlayerRouter() {
    _classCallCheck(this, PlayerRouter);
    this.router = (0, _express.Router)();
    this.setup();
  }
  _createClass(PlayerRouter, [{
    key: "getRouter",
    value: function getRouter() {
      return this.router;
    }
  }, {
    key: "setup",
    value: function setup() {
      this.router.get('/join/:identity/:gameCode', _controllers.playerController.joinGame);
      this.router.get('/found/:identity/:gameCode/:missionId', _controllers.playerController.setAchievement);
    }
  }]);
  return PlayerRouter;
}();
var playerRouter = new PlayerRouter();
exports.playerRouter = playerRouter;