import { Schema } from 'mongoose';
import type {
  IGameDocument as IPD,
  IGameInstanceMethods as IPIM,
  IGameModel as IPM,
  IGameStaticMethods as IPSM,
} from './game.types';

export const GameSchema = new Schema<IPD, IPM, IPIM, any, any, IPSM>({
  id: { type: String, required: true },
  code: { type: String, required: true },
  name: { type: String, required: true },
  startTime: { type: Date },
  duration: { type: Number },
  missions: { type: [Schema.Types.ObjectId], ref: 'Mission' },
  players: { type: [Schema.Types.ObjectId], ref: 'Player' },
  teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' },
});
