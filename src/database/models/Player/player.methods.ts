import { IPlayerInstanceMethods } from './player.types';

const methods: IPlayerInstanceMethods = {
  updateStatus(this, status) {
    console.log(this.status);
    // this.status = { ...this.status, ...status };
    Object.assign(this.status, status);
    console.log(this.status);
    return this.save();
  },

  editInfo(this, playerInfo) {
    Object.assign(this, playerInfo);
    return this.save();
  },
};

export { methods };
