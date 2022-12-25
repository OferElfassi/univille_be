import { IPlayerInstanceMethods } from './player.types';

const methods: IPlayerInstanceMethods = {
  updateStatus(this, status) {
    this.status = { ...this.status, ...status };
    return this.save();
  },
  editInfo(this, playerInfo) {
    Object.assign(this, playerInfo);
    return this.save();
  },
};

export { methods };
