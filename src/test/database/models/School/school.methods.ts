import type {
  ISchoolInstanceMethods,
  ISchoolStaticMethods,
} from './school.types';
import { identityQuery } from '../../db.utils';

/** ****************************************
 *              METHODS
 ***************************************** */
export const methods: ISchoolInstanceMethods = {
  editInfo(this, schoolInfo) {
    Object.assign(this, schoolInfo);
    return this.save();
  },
};

/** ****************************************
 *              STATICS
 ***************************************** */

export const statics: ISchoolStaticMethods = {
  async findOneByIdentity(this, identity, caseSensitive = false) {
    const school = await this.findOne(identityQuery(identity, caseSensitive));
    if (!school) throw new Error('Cant find this school');
    return school;
  },
  filterSchools(schoolObj) {
    return this.find(schoolObj);
  },
  createSchool(this, schoolObj) {
    const newSchool = new this(schoolObj);
    newSchool.id = newSchool._id;
    return newSchool.save();
  },
  async deleteSchool(this, identity) {
    const school = await this.findOneByIdentity(identity);
    await school.remove();
  },
};
