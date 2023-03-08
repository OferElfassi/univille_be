/** ****************************************
 *              METHODS
 ***************************************** */
import { IGameInstanceMethods, IGameStaticMethods } from './game.types';
import { PlayerModel, TeacherModel } from '../User';
import { MissionModel } from '../Mission';
import { AchievementModel } from '../Achievement';
import { namesQuery } from '../../db.utils';

export const methods: IGameInstanceMethods = {
  editInfo(this, gameInfo) {
    Object.assign(this, gameInfo);
    return this.save();
  },
  addMission(this, missionId) {
    this.missions.push(missionId);
    return this.save();
  },
  addPlayer(this, playerId) {
    this.players.push(playerId);
    return this.save();
  },
};

/** ****************************************
 *              STATICS
 ***************************************** */

export const statics: IGameStaticMethods = {
  async createGame(this, gameObj, teacherIdentity) {
    const teacher = await TeacherModel.findOneByIdentity(teacherIdentity);
    const newGame = new this(gameObj);
    newGame.teacher = teacher._id;
    return newGame.save();
  },

  async addPlayerByGameCode(this, gameCode, playerIdentity) {
    const game = await this.findOne({ code: gameCode });
    const player = await PlayerModel.findOne(namesQuery(playerIdentity));
    game.players.push(player._id);
    return game.save();
  },
  async isActive(this, gameCode) {
    const game = await this.findOne({ code: gameCode });
    const now = new Date();
    return now.getTime() < game.startTime.getTime() + game.duration * 60000;
  },
  async getTimeLeft(this, gameCode) {
    const game = await this.findOne({ code: gameCode });
    const now = new Date();
    return game.startTime.getTime() + game.duration * 60000 - now.getTime();
  },
  async setPlayerAchievement(this, gameCode, playerIdentity, missionIdentity) {
    const game = await this.findOne({ code: gameCode });
    const player = await PlayerModel.findOneByIdentity(playerIdentity);
    const mission = await MissionModel.findById(missionIdentity);
    const achievement = await AchievementModel.createOne({
      player,
      mission: mission._id,
      game: game._id,
      duration: Date.now() - game.startTime.getTime(),
      score: mission.score,
      playerTotal: player.score + mission.score,
    });
    await player.addNewAchievement(achievement);
    return achievement;
  },
  async giveColor(this, gameCode, playerIdentity) {
    const game = await this.findOne({ code: gameCode });
    const player = await PlayerModel.findOneByIdentity(playerIdentity);
    const randomColorIndex = Math.floor(Math.random() * game.colors.length);
    const color = game.colors[randomColorIndex];
    player.group = color;
    await player.save();
    return color;
  },
};
