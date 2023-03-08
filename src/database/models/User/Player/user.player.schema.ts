import { Schema } from 'mongoose';
import type {
  IPlayerDocument as IPD,
  IPlayerInstanceMethods as IPIM,
  IPlayerModel as IPM,
  IPlayerStaticMethods as IPSM,
} from './user.player.types';
// import { LocationSchema, UserModel } from '../..';

export const PlayerSchema = new Schema<IPD, IPM, IPIM, any, any, IPSM>(
  {
    group: { type: String },
    school: { type: String },
    avatar: { type: String },
    score: { type: Number, default: 0 },
    location: {
      type: {
        lat: Number,
        lng: Number,
        address: String,
      },
    },
  },
  { timestamps: true, discriminatorKey: 'kind' }
);
