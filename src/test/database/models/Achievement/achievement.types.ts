import type { Model, Schema, Document } from 'mongoose';
import type { IMission, IPlayer } from '../..';

export interface IAchievement {
  id: string;
  mission: IMission;
  player: IPlayer;
  duration: number;
  score: number;
}

export interface IAchievementDocument
  extends IAchievement,
    Document,
    IAchievementInstanceMethods {
  _id: string;
  id: string;
}

export interface IAchievementInstanceMethods {
  editInfo: (
    this: IAchievementDocument,
    achievementInfo: Partial<IAchievement>
  ) => Promise<IAchievementDocument>;
}

export interface IAchievementStaticMethods {
  findOneByIdentity: (
    this: IAchievementModel,
    identity: string /** username,id,fullName */,
    caseSensitive?: boolean
  ) => Promise<IAchievementDocument>;
}

export interface IAchievementModel
  extends Model<IAchievementDocument>,
    IAchievementStaticMethods {}
