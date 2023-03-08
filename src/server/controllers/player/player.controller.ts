import { GameModel, IPlayerModel, PlayerModel } from 'src/database';
import { CurdController } from '../crud';
import { IPlayerController } from './player.controller.types';

class PlayerController
  extends CurdController<IPlayerModel>
  implements IPlayerController
{
  constructor(model) {
    super(model);
  }

  async joinGame(req, res, next) {
    console.log('JOIN_GAME');
    try {
      const game = await GameModel.addPlayerByGameCode(
        req.params.gameCode,
        req.params.identity
      );
      res.status(200).json({ message: 'success', data: game });
    } catch (e) {
      next(e);
    }
  }

  async getStatus(req, res, next) {
    try {
      // const status = await this.model.getPlayerStatus(req.params.identity);
      res.status(200).json({ message: 'success', data: null });
    } catch (e) {
      next(e);
    }
  }

  async setAchievement(req, res, next) {
    console.log('SET_ACHIEVEMENT');
    try {
      const achievement = await GameModel.setPlayerAchievement(
        req.params.gameCode,
        req.params.identity,
        req.params.missionId
      );
      res.status(200).json({ message: 'success', data: achievement });
    } catch (e) {
      next(e);
    }
  }
}

const playerController = new PlayerController(PlayerModel);

export { playerController };
