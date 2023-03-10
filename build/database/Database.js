"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _path = _interopRequireDefault(require("path"));
require("./plugins");
var _db = require("./db.utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  dbName: process.env.DB_NAME
};
var preloadedSchemas = ['Location', 'Target', 'Hint'];
_mongoose["default"].set('strictQuery', true);

// Define a singleton class to manage Mongoose schemas and models
var Database = /*#__PURE__*/function () {
  function Database() {
    var _process$env$DB_HOST;
    _classCallCheck(this, Database);
    _defineProperty(this, "entitiesDir", _path["default"].join(__dirname, 'models'));
    // Connect to the database
    _mongoose["default"].connect((_process$env$DB_HOST = process.env.DB_HOST) !== null && _process$env$DB_HOST !== void 0 ? _process$env$DB_HOST : '', options);
    this.connection = _mongoose["default"].connection;
    this.connection.on('connected', function () {
      (0, _db.dataInitialization)().then(console.log)["catch"](console.warn);
      console.log('Database connected');
    });
    // Add an event listener for the 'error' event
    this.connection.on('error', function (error) {
      console.error('MongoDB connection error:', error);
    });
  }
  _createClass(Database, [{
    key: "logStatus",
    value: function logStatus() {
      console.log('Database status:', this.connection.readyState);
    }
  }, {
    key: "loadEntitySchema",
    value: function loadEntitySchema(name) {
      var schemaPath = _path["default"].join(this.entitiesDir, "".concat(name, ".schema.ts"));
      var schema = require(schemaPath);
      return new _mongoose["default"].Schema(schema["default"]);
    }
  }, {
    key: "loadEntityModel",
    value: function loadEntityModel(name) {
      var schema = this.loadEntitySchema(name);
      var modelPath = _path["default"].join(this.entitiesDir, "".concat(name, ".model.ts"));
      var model = require(modelPath);
      this.connection.model(name, schema, model["default"]);
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!Database.instance) {
        Database.instance = new Database();
      }
      return Database.instance;
    }
  }]);
  return Database;
}();
var _default = Database.getInstance(); // Preload schemas
// preloadedSchemas.forEach((schemaName) => {
//   const schemaPath = path.join(
//     this.entitiesDir,
//     schemaName,
//     `${schemaName.toLowerCase()}.schema.ts`
//   );
//   const schema = require(schemaPath);
//   console.log(`Preloaded schema: ${schemaName}`);
// }, this);
exports["default"] = _default;