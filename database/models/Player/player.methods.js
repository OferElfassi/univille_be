const methods = {
  updateStatus(status) {
    this.status = { ...this.status, ...status };
    return this.save();
  },
  editInfo(playerInfo) {
    Object.assign(this, playerInfo);
    return this.save();
  },
};
export { methods };
