import type { Document, Model, Schema } from 'mongoose';
import type { IClass, ISchool } from '../..';

export interface ITeacher {
  school: ISchool | Schema.Types.ObjectId;
  class: IClass | Schema.Types.ObjectId | any;
  fullName: string;
}

export interface ITeacherDocument
  extends ITeacher,
    Document,
    ITeacherInstanceMethods {}

export interface ITeacherInstanceMethods {
  editInfo: (
    this: ITeacherDocument,
    teacherInfo: Partial<ITeacher>
  ) => Promise<ITeacherDocument>;

  setClass: (
    this: ITeacherDocument,
    classIdentity: string
  ) => Promise<ITeacherDocument>;
}

export interface ITeacherStaticMethods {
  findOneByIdentity: (
    this: ITeacherModel,
    identity: string /** username,id,fullName */,
    caseSensitive?: boolean
  ) => Promise<ITeacherDocument>;

  filterTeachers: (
    this: ITeacherModel,
    teacherObj: Partial<ITeacher>
  ) => Promise<ITeacherDocument[]>;

  createTeacher: (
    this: ITeacherModel,
    teacherObj: Partial<ITeacherDocument>
  ) => Promise<ITeacherDocument>;

  deleteTeacher: (this: ITeacherModel, identity: string) => Promise<any>;
}

export interface ITeacherModel
  extends Model<ITeacherDocument>,
    ITeacherStaticMethods {}
