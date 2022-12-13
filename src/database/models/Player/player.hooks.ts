import { IPlayerDocument } from './player.types';
import { PlayerSchema } from './player.schema';

PlayerSchema.pre('save', async function (this: IPlayerDocument) {
  if (this.isNew) {
    this.id = this._id;
  }
});
