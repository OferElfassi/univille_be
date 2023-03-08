import { Schema } from 'mongoose';
import type { IHint } from './hint.types';

export const HintSchema = new Schema<IHint>({
  hint: { type: String, required: true },
  type: { type: String, required: true },
  title: { type: String, required: true },
  location: { x: { type: Number }, y: { type: Number } },
  image: { type: String },
});
