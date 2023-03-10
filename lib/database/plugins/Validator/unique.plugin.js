"use strict";

var _mongooseUniqueValidator = _interopRequireDefault(require("mongoose-unique-validator"));
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_mongooseUniqueValidator["default"].defaults.message = 'Error, {VALUE} already exists, please try another one.';
_mongoose["default"].plugin(_mongooseUniqueValidator["default"]);