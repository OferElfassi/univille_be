import { Schema } from 'mongoose';
import type { ITarget } from './target.types';

export const targetSchema = new Schema<ITarget>({
  title: { type: String, required: true },
  location: { x: { type: Number }, y: { type: Number } },
  image: { type: String },
});
