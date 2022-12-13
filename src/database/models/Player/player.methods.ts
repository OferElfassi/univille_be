import { PlayerSchema } from './player.schema';

PlayerSchema.methods.updateStatus = function (status) {
  Object.assign(this.status, status);
  return this.save();
};

PlayerSchema.methods.editInfo = function (playerInfo) {
  Object.assign(this, playerInfo);
  return this.save();
};
