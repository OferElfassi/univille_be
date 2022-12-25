"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playerRouter = void 0;

var _express = require("express");

var _controllers = require("../controllers");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
      this.router.get('/', _controllers.playerController.filter);
      this.router.post('/', _controllers.playerController.create);
      this.router.put('/:playerId', _controllers.playerController.edit);
      this.router["delete"]('/:playerId', _controllers.playerController["delete"]);
      this.router.put('/:playerId/status', _controllers.playerController.updateStatus);
      this.router.put('/points/:identity/:amount', _controllers.playerController.givePoints);
      this.router.get('/:identity/status', _controllers.playerController.getStatus);
    }
  }]);

  return PlayerRouter;
}();

var playerRouter = new PlayerRouter();
exports.playerRouter = playerRouter;