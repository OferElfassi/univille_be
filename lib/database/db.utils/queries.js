"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.namesQuery = exports.identityQuery = void 0;
var identityQuery = function identityQuery(search, casing) {
  return {
    $or: [{
      username: {
        $regex: "^".concat(search, "$"),
        // ^ = Starts with
        $options: casing ? '' : 'i' // i = case insensitive
      }
    }, {
      fullName: search
    }, {
      code: search
    }, {
      _id: search
    }, {
      id: search
    }]
  };
};
exports.identityQuery = identityQuery;
var namesQuery = function namesQuery(search) {
  var casing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    $or: [{
      username: {
        $regex: "^".concat(search, "$"),
        // ^ = Starts with
        $options: casing ? '' : 'i' // i = case insensitive
      }
    }, {
      fullName: search
    }]
  };
};
exports.namesQuery = namesQuery;