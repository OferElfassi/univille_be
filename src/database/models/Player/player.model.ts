import { model } from 'mongoose';
import { IPlayerDocument, IPlayerModel } from './player.types';
import { PlayerSchema } from './player.schema';

const Player = model<IPlayerDocument, IPlayerModel>(
  'Player',
  PlayerSchema,
  'players'
);

export { Player };
