import type { ITeacherInstanceMethods, ITeacherStaticMethods } from '../..';
import { identityQuery } from '../../../db.utils';

/** ****************************************
 *              METHODS
 ***************************************** */
export const teacherMethods: ITeacherInstanceMethods = {
  editInfo(this, teacherInfo) {
    Object.assign(this, teacherInfo);
    return this.save();
  },

  async setClass(this, classId) {
    this.class = classId;
    return this.save();
  },
};

/** ****************************************
 *              STATICS
 ***************************************** */

export const teacherStatics: ITeacherStaticMethods = {
  async findOneByIdentity(this, identity, caseSensitive = false) {
    const teacher = await this.findOne(identityQuery(identity, caseSensitive));
    if (!teacher) throw new Error('Cant find this teacher');
    return teacher;
  },

  async filterTeachers(teacherObj) {
    return this.find(teacherObj);
  },

  createTeacher(this, teacherObj) {
    const newTeacher = new this(teacherObj);
    newTeacher.id = newTeacher._id;
    return newTeacher.save();
  },

  async deleteTeacher(this, identity) {
    const teacher = await this.findOneByIdentity(identity);
    return teacher.remove();
  },
};
