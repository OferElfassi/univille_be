"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _routers = require("./routers");
var _middleware = require("./middleware");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// localhost:3000/api/v1/players/join/DekelBD/123456
var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);
    this.app = (0, _express["default"])();
    this.setupGlobalMiddleware();
    this.setupRouters();
  }
  _createClass(App, [{
    key: "start",
    value: function start() {
      var port = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 80;
      return this.app.listen(port, function () {
        console.log("listening on :".concat(port));
      });
    }
  }, {
    key: "setupGlobalMiddleware",
    value: function setupGlobalMiddleware() {
      this.app.use(_express["default"].json());
      this.app.use(_express["default"].urlencoded({
        extended: true
      }));
      this.app.use((0, _morgan["default"])('combined'));
    }
  }, {
    key: "setupRouters",
    value: function setupRouters() {
      this.app.get('/', _middleware.isAlive);
      this.app.use('/api/v1/players', _routers.playerRouter.getRouter());
      this.app.use(_middleware.isError);
    }
  }]);
  return App;
}();
var _default = new App();
exports["default"] = _default;