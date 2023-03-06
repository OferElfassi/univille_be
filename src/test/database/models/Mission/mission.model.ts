import { model, Schema } from 'mongoose';
import type {
  IMissionDocument,
  IMissionModel,
  IMissionDocument as IPD,
  IMissionInstanceMethods as IPIM,
  IMissionModel as IPM,
  IMissionStaticMethods as IPSM,
} from './mission.types';
import { methods, statics } from './mission.methods';
import { HintSchema, targetSchema } from '../..';
import { preSave } from '../../db.utils';

export const MissionSchema = new Schema<IPD, IPM, IPIM, any, any, IPSM>(
  {
    id: { type: String },
    name: { type: String, required: true },
    image: { type: String },
    target: targetSchema,
    hints: [HintSchema],
  },
  { timestamps: true, statics, methods }
);
MissionSchema.pre('save', preSave);
const MissionModel = model<IMissionDocument, IMissionModel>(
  'Mission',
  MissionSchema,
  'missions'
);

export { MissionModel };
