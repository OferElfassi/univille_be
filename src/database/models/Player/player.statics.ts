// import { PlayerSchema } from './player.schema';

// PlayerSchema.statics.filterPlayers = function (formObj) {
//   return this.find(formObj);
// };
//
// PlayerSchema.statics.createPlayer = function (playerObj) {
//   const newPlayer = new this(playerObj);
//   newPlayer.id = newPlayer._id;
//   return newPlayer.save();
// };
import { IPlayerStaticMethods } from './player.types';
import { identityQuery } from './player.queries';

export const statics: IPlayerStaticMethods = {
  async findOneByIdentity(this, identity, caseSensitive = false) {
    const player = await this.findOne(identityQuery(identity, caseSensitive));
    if (!player) throw new Error('Cant find this player');
    return player;
  },
  filterPlayers(formObj) {
    return this.find(formObj);
  },
  createPlayer(this, playerObj) {
    const newPlayer = new this(playerObj);
    newPlayer.id = newPlayer._id;
    return newPlayer.save();
  },
  async givePoints(this, identity, amount) {
    console.log(identity, amount);
    const player = await this.findOneByIdentity(identity);
    const score = player.status.score + amount;
    const updatedPlayer = await player.updateStatus({ score });
    return updatedPlayer.status;
  },

  async getPlayerStatus(this, identity) {
    console.log(identity);
    const player = await this.findOneByIdentity(identity);
    return player.status;
  },
};
