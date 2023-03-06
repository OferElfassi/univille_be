import type { Model, Schema, Document } from 'mongoose';
import { IMission, IPlayer, ITeacher } from '../..';

export interface IGame {
  id: string;
  code: string;
  name: string;
  startTime: Date;
  duration: number;
  missions: IMission[] | Schema.Types.ObjectId[];
  players: IPlayer[] | Schema.Types.ObjectId[];
  teacher: ITeacher;
}

export interface IGameDocument extends IGame, Document, IGameInstanceMethods {
  _id: string;
  id: string;
}

export interface IGameInstanceMethods {
  editInfo: (
    this: IGameDocument,
    gameInfo: Partial<IGame>
  ) => Promise<IGameDocument>;
}

export interface IGameStaticMethods {
  findOneByIdentity: (
    this: IGameModel,
    identity: string,
    caseSensitive?: boolean
  ) => Promise<IGameDocument>;
}

export interface IGameModel extends Model<IGameDocument>, IGameStaticMethods {}
