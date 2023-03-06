'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.methods = void 0;
var methods = {
  updateStatus: function updateStatus(status) {
    console.log(this.status);
    // this.status = { ...this.status, ...status };
    Object.assign(this.status, status);
    console.log(this.status);
    return this.save();
  },
  editInfo: function editInfo(playerInfo) {
    Object.assign(this, playerInfo);
    return this.save();
  },
};
exports.methods = methods;
