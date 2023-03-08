import { Schema } from 'mongoose';
import type {
  ISchoolDocument as IPD,
  ISchoolInstanceMethods as IPIM,
  ISchoolModel as IPM,
  ISchoolStaticMethods as IPSM,
} from './school.types';
import { methods, statics } from './school.methods';

export const SchoolSchema = new Schema<IPD, IPM, IPIM, any, any, IPSM>(
  {
    name: { type: String, required: true },
    city: { type: String },
    address: { type: String },
    location: { x: { type: Number }, y: { type: Number } },
    classes: { type: [Schema.Types.ObjectId], default: [], ref: 'Class' },
    teachers: { type: [Schema.Types.ObjectId], default: [], ref: 'Class' },
  },
  { timestamps: true, statics, methods }
);
