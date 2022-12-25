import { Schema } from 'mongoose';

export const StatusSchema = new Schema({
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
