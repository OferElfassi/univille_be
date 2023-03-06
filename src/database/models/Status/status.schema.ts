import { Schema } from 'mongoose';
import { IStatus } from './status.types';

const positionSchema = new Schema(
  {
    x: Number,
    y: Number,
  },
  { _id: false }
);

export const StatusSchema = new Schema<IStatus>(
  {
    level: {
      type: Number,
      default: 0,
    },
    score: {
      type: Number,
      default: 0,
    },
    position: {
      type: positionSchema,
      default: { x: 0, y: 0 },
    },
  },
  { _id: false }
);
