import type { Document, Model } from 'mongoose';
import type { ILocation, ISchool } from '../..';

export interface IPlayer {
  username: string;
  fullName: string;
  group: string;
  school: ISchool;
  avatar: string;
  score: number;
  location: ILocation;
}

export interface IPlayerDocument
  extends IPlayer,
    Document,
    IPlayerInstanceMethods {}

export interface IPlayerInstanceMethods {
  editInfo: (
    this: IPlayerDocument,
    playerInfo: Partial<IPlayer>
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
  ) => Promise<IPlayerDocument>;
}

export interface IPlayerModel
  extends Model<IPlayerDocument>,
    IPlayerStaticMethods {}
