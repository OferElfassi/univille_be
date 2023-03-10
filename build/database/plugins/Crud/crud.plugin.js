"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crudPlugin = crudPlugin;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _crudPlugin = require("./crud.plugin.statics");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function crudPlugin(schema) {
  schema.pre('save', function (next) {
    // Your pre-save logic goes here
    this.id = this._id;
    // console.log('Pre-save hook executed!');
    next();
  });

  // Add static methods to all models using Object.assign
  Object.assign(schema.statics, _crudPlugin.pluginStatics);

  // Set the toJSON option to include getters on all schemas
  schema.set('toJSON', {
    getters: true
  });
}
_mongoose["default"].plugin(crudPlugin);