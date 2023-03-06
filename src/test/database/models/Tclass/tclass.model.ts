import { model, Schema } from 'mongoose';
import { methods, statics } from './tclass.methods';
import type {
  IClassModel,
  IClassDocument as IPD,
  IClassInstanceMethods as IPIM,
  IClassModel as IPM,
  IClassStaticMethods as IPSM,
} from './tclass.types';

export const ClassSchema = new Schema<IPD, IPM, IPIM, any, any, IPSM>(
  {
    id: { type: String },
    name: { type: String, required: true },
    score: { type: Number, default: 0 },
    teachers: { type: [Schema.Types.ObjectId], default: [], ref: 'Teacher' },
    players: { type: [Schema.Types.ObjectId], default: [], ref: 'Player' },
  },
  { timestamps: true, statics, methods }
);

const ClassModel = model<IPD, IClassModel>('Tclass', ClassSchema);
