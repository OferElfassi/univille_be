import type {
  IPlayerInstanceMethods,
  IPlayerStaticMethods,
} from './user.player.types';
import { identityQuery } from '../../../db.utils';

/** ****************************************
 *              METHODS
 ***************************************** */
export const playerMethods: IPlayerInstanceMethods = {
  editInfo(this, playerInfo) {
    Object.assign(this, playerInfo);
    return this.save();
  },
};

/** ****************************************
 *              STATICS
 ***************************************** */

export const playerStatics: IPlayerStaticMethods = {
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
    const player = await this.findOneByIdentity(identity);
    player.score += Number(amount);
    return player.save();
  },
};
