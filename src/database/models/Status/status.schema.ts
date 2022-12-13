import { Schema } from 'mongoose';
import { IStatus } from './status.types';

export const StatusSchema = new Schema<IStatus>({
  level: {
    type: Number,
    default: 0,
  },
  score: {
    type: Number,
    default: 0,
  },
  position: { type: { x: Number, y: Number }, default: { x: 0, y: 0 } },
});
