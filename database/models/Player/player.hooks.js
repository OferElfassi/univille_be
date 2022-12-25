import { PlayerSchema } from './player.schema';

PlayerSchema.pre('save', async function() {
  if (this.isNew) {
    this.id = this._id;
  }
});
