import { Document, Model } from 'mongoose';
import { IStatus } from '../Status';

export interface IPlayer {
  username: string;
  fullName: string;
  group: string;
  school: string;
  city: string;
  avatar: string;
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
  editInfo: (
    this: IPlayerDocument,
    playerInfo: Partial<IPlayer>
  ) => Promise<IPlayerDocument>;
  updateStatus: (
    this: IPlayerDocument,
    status: Partial<IStatus>
  ) => Promise<IPlayerDocument>;
}

export interface IPlayerStaticMethods {
  findOneByIdentity: (
    this: IPlayerModel,
    identity: string /** username,id,fullName */,
    caseSensitive?: boolean
  ) => Promise<IPlayerDocument>;
  filterPlayers: (playerObj: Partial<IPlayer>) => Promise<IPlayerDocument[]>;
  createPlayer: (
    this: IPlayerModel,
    playerObj: Partial<IPlayerDocument>
  ) => Promise<IPlayerDocument>;
  givePoints: (
    this: IPlayerModel,
    identity: string /** username,id,fullName */,
    amount: number
  ) => Promise<IStatus>;
  getPlayerStatus: (
    this: IPlayerModel,
    identity: string /** username,id,fullName */
  ) => Promise<IStatus>;
}

export interface IPlayerModel
  extends Model<IPlayerDocument>,
    IPlayerStaticMethods {}
