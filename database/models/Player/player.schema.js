import { Schema } from 'mongoose';
import { StatusSchema } from '../Status';
import { statics } from './player.statics';
import { methods } from './player.methods';

export const PlayerSchema = new Schema({
  id: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  group: {
    type: String,
  },
  school: {
    type: String,
  },
  city: {
    type: String,
  },
  avatar: {
    type: String,
  },
  status: {
    type: StatusSchema,
    default: { level: 0, score: 0, position: { x: 0, y: 0 } },
  },
}, { timestamps: true, statics, methods });
