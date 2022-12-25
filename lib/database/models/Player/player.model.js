import { model } from 'mongoose';
import { PlayerSchema } from './player.schema';

const Player = model('Player', PlayerSchema, 'players');
export { Player };
