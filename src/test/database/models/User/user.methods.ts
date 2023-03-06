/** ****************************************
 *              METHODS
 ***************************************** */

import type { IUserStaticMethods } from './user.types';
import { identityQuery } from '../../db.utils';

/** ****************************************
 *              STATICS
 ***************************************** */

export const statics: IUserStaticMethods = {
  async findOneByIdentity(this, identity, caseSensitive = false) {
    const player = await this.findOne(identityQuery(identity, caseSensitive));
    if (!player) throw new Error('Cant find this player');
    return player;
  },
};
