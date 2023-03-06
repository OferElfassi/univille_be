import { Schema } from 'mongoose';
import type {
  IPlayerDocument,
  IPlayerModel,
  IPlayerDocument as IPD,
  IPlayerInstanceMethods as IPIM,
  IPlayerModel as IPM,
  IPlayerStaticMethods as IPSM,
} from './player.types';
import { methods, statics } from './player.methods';
import { LocationSchema, UserModel } from '../..';

export const PlayerSchema = new Schema<IPD, IPM, IPIM, any, any, IPSM>(
  {
    group: { type: String },
    school: { type: String },
    avatar: { type: String },
    score: { type: Number, default: 0 },
    location: { type: LocationSchema, default: {} },
  },
  { timestamps: true, statics, methods }
);

const PlayerModel = UserModel.discriminator<IPlayerDocument, IPlayerModel>(
  'Player',
  PlayerSchema
);

export { PlayerModel };
