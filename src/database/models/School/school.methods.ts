import type {
  ISchoolInstanceMethods,
  ISchoolStaticMethods,
} from './school.types';
import { ClassModel } from '../Tclass';
import { identityQuery } from '../../db.utils';

/** ****************************************
 *              METHODS
 ***************************************** */
export const methods: ISchoolInstanceMethods = {
  editInfo(this, schoolInfo) {
    Object.assign(this, schoolInfo);
    return this.save();
  },
  createClass(this, className) {
    return ClassModel.createClass({ name: className, school: this._id });
  },
};

/** ****************************************
 *              STATICS
 ***************************************** */

export const statics: ISchoolStaticMethods = {
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
