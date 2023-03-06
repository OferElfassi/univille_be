import type { Document, Model, Schema } from 'mongoose';
import type { IClass } from '../..';

export interface ISchool {
  name: string;
  city: string;
  address: string;
  location: { x: number; y: number };
  classes: Schema.Types.ObjectId[] | IClass[];
}

export interface ISchoolDocument
  extends ISchool,
    Document,
    ISchoolInstanceMethods {
  _id: string;
  id: string;
}

export interface ISchoolInstanceMethods {
  editInfo: (
    this: ISchoolDocument,
    schoolInfo: Partial<ISchool>
  ) => Promise<ISchoolDocument>;
}

export interface ISchoolStaticMethods {
  findOneByIdentity: (
    this: ISchoolModel,
    identity: string,
    caseSensitive?: boolean
  ) => Promise<ISchoolDocument>;
  filterSchools: (schoolObj: Partial<ISchool>) => Promise<ISchoolDocument[]>;
  createSchool: (
    this: ISchoolModel,
    schoolObj: Partial<ISchoolDocument>
  ) => Promise<ISchoolDocument>;
  deleteSchool: (this: ISchoolModel, identity: string) => Promise<any>;
}

export interface ISchoolModel
  extends Model<ISchoolDocument>,
    ISchoolStaticMethods {}
