import { Document, Model } from 'mongoose';
import { IStatus } from '../Status';

export interface IPlayer {
  username: string;
  fullName: string;
  group: string;
  school: string;
  city: string;
  status: IStatus;
}

export interface IPlayerDocument
  extends IPlayer,
    Document,
    IPlayerInstanceMethods {
  _id: string;
  id: string;
}

export interface IPlayerInstanceMethods {
  editInfo: (playerInfo: Partial<IPlayer>) => Promise<IPlayerDocument>;
  updateStatus: (status: Partial<IStatus>) => Promise<IPlayerDocument>;
}

export interface IPlayerStaticMethods {
  filterPlayers: (
    playerObj: Partial<IPlayerDocument>
  ) => Promise<IPlayerDocument[]>;
  createPlayer: (
    playerObj: Partial<IPlayerDocument>
  ) => Promise<IPlayerDocument>;
}

export interface IPlayerModel
  extends Model<IPlayerDocument>,
    IPlayerStaticMethods {}
