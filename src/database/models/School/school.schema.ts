import { Schema } from 'mongoose';
import type {
  ISchoolDocument as IPD,
  ISchoolInstanceMethods as IPIM,
  ISchoolModel as IPM,
  ISchoolStaticMethods as IPSM,
} from './school.types';

export const SchoolSchema = new Schema<IPD, IPM, IPIM, any, any, IPSM>({
  name: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  location: { x: { type: Number }, y: { type: Number } },
  classes: { type: [Schema.Types.ObjectId], default: [], ref: 'Class' },
  teachers: { type: [Schema.Types.ObjectId], default: [], ref: 'Class' },
});
