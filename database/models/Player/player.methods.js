"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.methods = void 0;
var methods = {
  updateStatus: function updateStatus(status) {
    Object.assign(this.status, status);
    return this.save();
  },
  editInfo: function editInfo(playerInfo) {
    Object.assign(this, playerInfo);
    return this.save();
  }
};
exports.methods = methods;