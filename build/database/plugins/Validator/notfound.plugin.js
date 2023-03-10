"use strict";

var _mongooseFindOrError = _interopRequireDefault(require("mongoose-find-or-error"));
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_mongoose["default"].plugin(_mongooseFindOrError["default"], {
  getFindByIdError: function getFindByIdError(id, modelName) {
    return new Error("Couldn't find ".concat(modelName, " by id ").concat(id));
  },
  getFindOneError: function getFindOneError(query, modelName) {
    return new Error("Couldn't find ".concat(modelName));
  }
});