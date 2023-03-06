/*
im using mongoose and typescript, following is the code for reference, its split into 3 files "types.ts", "methods.ts" and "model.ts".
i have typescript errors when i try to use the instance methods in "methods.ts" file, for example
when i try to call the this.save(),this.findOne(), this.find() and other mongoose methods.
how can i have it recognize that its mongoose document and have the save() method and all other methods available?

[file: types.ts]=

export interface IClass {
  id: string;
  name: string;
  score: number;
  teachers: any[];
  players: any[];
}

export interface IClassDocument
  extends IClass,
    Document,
    IClassInstanceMethods {
  _id: string;
  id: string;
}

export interface IClassInstanceMethods {
  editInfo: (
    this: IClassDocument,
    classInfo: Partial<IClass>
  ) => Promise<IClassDocument>;

  addTeacher: (
    this: IClassDocument,
    teacherIdentity: string
  ) => Promise<IClassDocument>;

}

export interface IClassStaticMethods {
  findOneByIdentity: (
    this: IClassModel,
    identity: string ,
    caseSensitive?: boolean
  ) => Promise<IClassDocument>;

  filterClasses: (
    this: IClassModel,
    classObj: Partial<IClass>
  ) => Promise<IClassDocument[]>;

}

export interface IClassModel
  extends Model<IClassDocument>,
    IClassStaticMethods {}


[file: methods.ts]=

export const methods: IClassInstanceMethods = {
  async editInfo(this, gradeInfo) {
    Object.assign(this, gradeInfo);
    return this.save();
  },
  async addTeacher(this, teacherIdentity) {
    this.teachers.push(teacherIdentity);
    return this.save();
  },
}

export const statics: IClassStaticMethods = {
  async findOneByIdentity(this, identity, caseSensitive = false) {
    const grade = await this.findOne(identityQuery(identity, caseSensitive));
    if (!grade) throw new Error('Cant find this grade');
    return grade;
  },
  async filterClasses(gradeObj) {
    return this.find(gradeObj);
  },

  createClass(this, gradeObj) {
    const newGrade = new this(gradeObj);
    newGrade.id = newGrade._id;
    return newGrade.save();
  },
}

[file: model.ts]=

import { model, Schema } from 'mongoose';
import { methods, statics } from './tclass.methods';
import type {
  IClassModel,
  IClassDocument as IPD,
  IClassInstanceMethods as IPIM,
  IClassModel as IPM,
  IClassStaticMethods as IPSM,
} from './tclass.types';

export const TclassSchema = new Schema<IPD, IPM, IPIM, any, any, IPSM>(
  {
    id: { type: String },
    name: { type: String, required: true },
    score: { type: Number, default: 0 },
    teachers: { type: [Schema.Types.ObjectId], default: [], ref: 'Teacher' },
    players: { type: [Schema.Types.ObjectId], default: [], ref: 'Player' },
  },
  { timestamps: true, statics, methods }
);

const ClassModel = model<IPD, IClassModel>('Tclass', TclassSchema);

 */
