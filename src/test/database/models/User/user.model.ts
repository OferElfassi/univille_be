import { model, Schema } from 'mongoose';
import type { IUserDocument, IUserModel } from './user.types';
import { preSave } from '../../db.utils';
import { statics } from './user.methods';

const UserSchema = new Schema(
  {
    id: { type: String, required: true },
    username: { type: String, required: true },
    fullName: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true, statics }
);

UserSchema.pre('save', preSave);

const UserModel = model<IUserDocument, IUserModel>('User', UserSchema, 'users');

export { UserModel };
