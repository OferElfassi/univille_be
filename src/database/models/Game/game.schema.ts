import { Schema } from 'mongoose';
import type {
  IGameDocument as IPD,
  IGameInstanceMethods as IPIM,
  IGameModel as IPM,
  IGameStaticMethods as IPSM,
} from './game.types';
import { methods, statics } from './game.methods';

export const GameSchema = new Schema<IPD, IPM, IPIM, any, any, IPSM>(
  {
    code: { type: String, required: [true, 'Code is required'], unique: true },
    name: { type: String, required: [true, 'game name is required'] },
    startTime: { type: Date },
    duration: { type: Number },
    colors: [{ type: String }],
    missions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Mission',
        autopopulate: true,
      },
    ],
    players: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
    teacher: {
      type: Schema.Types.ObjectId,
      ref: 'Teacher',
      autopopulate: true,
    },
  },
  { timestamps: true, statics, methods }
);
