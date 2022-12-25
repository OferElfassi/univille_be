// import { PlayerSchema } from './player.schema';
import { identityQuery } from './player.queries';

export const statics = {
  async findOneByIdentity(identity, caseSensitive = false) {
    const player = await this.findOne(identityQuery(identity, caseSensitive));
    if (!player) throw new Error('Cant find this player');
    return player;
  },
  filterPlayers(formObj) {
    return this.find(formObj);
  },
  createPlayer(playerObj) {
    const newPlayer = new this(playerObj);
    newPlayer.id = newPlayer._id;
    return newPlayer.save();
  },
  async givePoints(identity, amount) {
    console.log(identity, amount);
    const player = await this.findOneByIdentity(identity);
    const score = player.status.score + amount;
    const updatedPlayer = await player.updateStatus({ score });
    return updatedPlayer.status;
  },
  async getPlayerStatus(identity) {
    console.log(identity);
    const player = await this.findOneByIdentity(identity);
    return player.status;
  },
};
