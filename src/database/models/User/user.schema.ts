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
    id: { type: String, required: true },
    username: { type: String, required: true },
    fullName: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true, discriminatorKey: 'kind' }
);

UserSchema.pre('save', preSave);
