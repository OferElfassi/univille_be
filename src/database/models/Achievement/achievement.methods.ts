import { identityQuery } from '../../db.utils';
import {
  IAchievementInstanceMethods,
  IAchievementStaticMethods,
} from './achievement.types';

export const methods: IAchievementInstanceMethods = {
  async editInfo(this, achievementInfo) {
    Object.assign(this, achievementInfo);
    return this.save();
  },
};

export const statics: IAchievementStaticMethods = {
  async findOneByIdentity(this, identity, caseSensitive = false) {
    const achievement = await this.findOne(
      identityQuery(identity, caseSensitive)
    );
    if (!achievement) throw new Error('Cant find this achievement');
    return achievement;
  },
};
