import { Schema } from 'mongoose';
import { preSave } from '../../db.utils';
import type {
  IUserDocument as IPD,
  IUserInstanceMethods as IPIM,
  IUserModel as IPM,
  IUserStaticMethods as IPSM,
} from './user.types';

export const UserSchema = new Schema<IPD, IPM, IPIM, any, any, IPSM>(
  {
    id: { type: String },
    username: { type: String, required: [true, 'username is required'] },
    fullName: { type: String, required: [true, 'fullName is required'] },
    password: { type: String },
  },
  { timestamps: true, discriminatorKey: 'kind' }
);

UserSchema.pre('save', preSave);
