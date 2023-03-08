// import { CurdController } from '../crud';
// import { IGameController } from './game.controller';
// import { IGameModel } from '../../../database';
//
// class GameController extends CurdController<IGameModel>
// implements IGameController{
//   constructor() {
//     super('Game');
//   }
//
//   joinGame = async (req, res) => {
//     const { identity, gameId } = req.body;
//     const game = await this.model.joinGame(identity, gameId);
//     res.status(200).json(game);
//   };
//
//   isActive = async (req, res) => {
//     const { identity } = req.body;
//     const game = await this.model.isActive(identity);
//     res.status(200).json(game);
//   };
//
//   timeLeft = async (req, res) => {
//     const { identity } = req.body;
//     const game = await this.model.timeLeft(identity);
//     res.status(200).json(game);
//   };
// }
