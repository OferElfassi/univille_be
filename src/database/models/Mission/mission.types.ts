import type { Document, Model } from 'mongoose';
import type { IHint } from './Hint';
import type { ITarget } from './Target';

export interface IMission {
  name: string;
  image: string;
  target: ITarget;
  hints: IHint[];
}

export interface IMissionDocument
  extends IMission,
    Document,
    IMissionInstanceMethods {}

export interface IMissionInstanceMethods {
  edit: (
    this: IMissionDocument,
    missionInfo: Partial<IMission>
  ) => Promise<IMissionDocument>;
  addHint: (this: IMissionDocument, hint: IHint) => Promise<IMissionDocument>;
  removeHint: (
    this: IMissionDocument,
    hintId: string
  ) => Promise<IMissionDocument>;
  editHint: (
    this: IMissionDocument,
    hintId: string,
    hintInfo: IHint
  ) => Promise<IMissionDocument>;
  addTarget: (
    this: IMissionDocument,
    target: ITarget
  ) => Promise<IMissionDocument>;
  editTarget: (
    this: IMissionDocument,
    target: ITarget
  ) => Promise<IMissionDocument>;
}

export interface IMissionStaticMethods {
  // findOneByIdentity: (
  //   identity: string /** username,id,fullName */,
  //   caseSensitive?: boolean
  // ) => Promise<IMissionDocument>;
  filterMissions: (
    missionObj: Partial<IMission>
  ) => Promise<IMissionDocument[]>;
  createMissions: (
    missionObj: Partial<IMissionDocument>
  ) => Promise<IMissionDocument>;
  deleteMission: (identity: string) => Promise<any>;
}

export interface IMissionModel
  extends Model<IMissionDocument>,
    IMissionStaticMethods {}
