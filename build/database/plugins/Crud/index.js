"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _crudPlugin = require("./crud.plugin.statics");
Object.keys(_crudPlugin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _crudPlugin[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _crudPlugin[key];
    }
  });
});
var _crud = require("./crud.plugin");
Object.keys(_crud).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _crud[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _crud[key];
    }
  });
});
var _crudPlugin2 = require("./crud.plugin.types");
Object.keys(_crudPlugin2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _crudPlugin2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _crudPlugin2[key];
    }
  });
});