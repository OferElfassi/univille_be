import { model, Schema } from 'mongoose';

import type {
  IAchievementModel,
  IAchievementDocument as IPD,
  IAchievementInstanceMethods as IPIM,
  IAchievementModel as IPM,
  IAchievementStaticMethods as IPSM,
} from './achievement.types';

export const AchievementSchema = new Schema<IPD, IPM, IPIM, any, any, IPSM>({
  id: { type: String, required: true },
  mission: { type: Schema.Types.ObjectId, ref: 'Mission', required: true },
  player: { type: Schema.Types.ObjectId, ref: 'player', required: true },
  duration: { type: Number, required: true },
});

const AchievementModel = model<IPD, IAchievementModel>(
  'Achievement',
  AchievementSchema
);
