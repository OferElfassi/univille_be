"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identityQuery = void 0;

var identityQuery = function identityQuery(search, casing) {
  return {
    $or: [{
      id: search
    }, {
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

exports.identityQuery = identityQuery;