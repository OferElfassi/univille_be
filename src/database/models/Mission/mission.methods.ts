import type {
  IMissionInstanceMethods,
  IMissionStaticMethods,
} from './mission.types';
import { identityQuery } from '../../db.utils';

/** ****************************************
 *              METHODS
 ***************************************** */
export const methods: IMissionInstanceMethods = {
  edit(this, missionInfo) {
    Object.assign(this, missionInfo);
    return this.save();
  },
  addHint(this, hint) {
    this.hints.push(hint);
    return this.save();
  },
  removeHint(this, hintId) {
    this.hints = this.hints.filter((hint) => hint.id !== hintId);
    return this.save();
  },
  editHint(this, hintId, hintInfo) {
    const hint = this.hints.find((h) => h.id === hintId);
    if (!hint) throw new Error('Cant find this hint');
    Object.assign(hint, hintInfo);
    return this.save();
  },
  addTarget(this, target) {
    this.target = target;
    return this.save();
  },
  editTarget(this, targetInfo) {
    Object.assign(this.target, targetInfo);
    return this.save();
  },
};

/** ****************************************
 *              STATICS
 ***************************************** */

export const statics: IMissionStaticMethods = {
  // async findOneByIdentity(this, identity, caseSensitive = false) {
  //   const mission = await this.findOne(identityQuery(identity, caseSensitive));
  //   if (!mission) throw new Error('Cant find this Mission');
  //   return mission;
  // },
  filterMissions(missionObj) {
    return this.find(missionObj);
  },
  createMissions(this, missionObj) {
    const newMission = new this(missionObj);
    newMission.id = newMission._id;
    return newMission.save();
  },
  async deleteMission(this, identity) {
    const mission = await this.findOneByIdentity(identity);
    await mission.remove();
  },
};
