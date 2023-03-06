import { Schema, model } from 'mongoose';
import type {
  IGameModel,
  IGameDocument as IPD,
  IGameInstanceMethods as IPIM,
  IGameModel as IPM,
  IGameStaticMethods as IPSM,
} from './game.types';

export const GameSchema = new Schema<IPD, IPM, IPIM, any, any, IPSM>({
  id: { type: String, required: true },
  code: { type: String, required: true },
  name: { type: String, required: true },
  startTime: { type: Date, required: true },
  duration: { type: Number, required: true },
  missions: { type: [Schema.Types.ObjectId], ref: 'Mission', required: true },
  players: { type: [Schema.Types.ObjectId], ref: 'Player', required: true },
  teacher: { type: Schema.Types.ObjectId, ref: 'Teacher', required: true },
});

export const GameModel = model<IPD, IGameModel>('Game', GameSchema);
