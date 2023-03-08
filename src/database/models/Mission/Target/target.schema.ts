import { Schema } from 'mongoose';
import type { ITarget } from './target.types';

export const TargetSchema = new Schema<ITarget>({
  title: { type: String },
  location: { x: { type: Number }, y: { type: Number } },
  image: { type: String },
});
