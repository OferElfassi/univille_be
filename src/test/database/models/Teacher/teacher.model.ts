import { Schema } from 'mongoose';
import type {
  ITeacherModel,
  ITeacherDocument as IPD,
  ITeacherInstanceMethods as IPIM,
  ITeacherModel as IPM,
  ITeacherStaticMethods as IPSM,
  ITeacherDocument,
} from './teacher.types';
import { UserModel } from '../User';
import { methods, statics } from './teacher.methods';

export const TeacherSchema = new Schema<IPD, IPM, IPIM, any, any, IPSM>(
  {
    school: { type: Schema.Types.ObjectId, ref: 'School' },
    class: { type: Schema.Types.ObjectId, ref: 'Class' },
  },
  { timestamps: true, statics, methods }
);

const TeacherModel = UserModel.discriminator<ITeacherDocument, ITeacherModel>(
  'Teacher',
  TeacherSchema
);

export { TeacherModel };
