import type { Document, Model } from 'mongoose';

export interface IUser {
  username: string;
  fullName: string;
  password: string;
  hash: string;
}

export interface IUserDocument extends IUser, Document {
  _id: string;
  id: string;
}

export interface IUserStaticMethods {
  findOneByIdentity: (
    this: IUserModel,
    identity: string /** username,id,fullName */,
    caseSensitive?: boolean
  ) => Promise<IUserDocument>;
}

export interface IUserModel extends Model<IUserDocument>, IUserStaticMethods {}
