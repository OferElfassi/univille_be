import { PlayerSchema } from './player.schema';

PlayerSchema.statics.filterPlayers = function (formObj) {
  return this.find(formObj);
};

PlayerSchema.statics.createPlayer = function (playerObj) {
  const newPlayer = new this(playerObj);
  newPlayer.id = newPlayer._id;
  return newPlayer.save();
};
