import { IPlayer, IStatus, Player } from 'src/database';

interface IPlayerController {
  filter: IControlFn<Partial<IPlayer>>;
  create: IControlFn<IPlayer>;
  edit: IControlFn<Partial<IPlayer>, { playerId: string }>;
  delete: IControlFn<never, { playerId: string }>;
  updateStatus: IControlFn<Partial<IStatus>, { playerId: string }>;
  getStatus: IControlFn<never, { identity: string }>;
  givePoints: IControlFn<never, { identity: string; amount: number }>;
}

export const playerController: IPlayerController = {
  filter: async (req, res, next) => {
    try {
      const players = await Player.filterPlayers(req.body);
      res.status(200).json({ message: 'success', data: players });
    } catch (e) {
      next(e);
    }
  },
  create: async (req, res, next) => {
    try {
      const player = await Player.createPlayer(req.body);
      res.status(200).json({ message: 'success', data: player });
    } catch (e) {
      next(e);
    }
  },
  edit: async (req, res, next) => {
    try {
      const player = await Player.findById(req.params.playerId);
      const updatedPlayer = await player.editInfo(req.body);
      res.status(200).json({ message: 'success', data: updatedPlayer });
    } catch (e) {
      next(e);
    }
  },
  delete: async (req, res, next) => {
    try {
      await Player.findByIdAndRemove(req.params.playerId);
    } catch (e) {
      next(e);
    }
  },
  updateStatus: async (req, res, next) => {
    try {
      const player = await Player.findById(req.params.playerId);
      const updatedPlayer = await player.updateStatus(req.body);
      res.status(200).json({ message: 'success', data: updatedPlayer });
    } catch (e) {
      next(e);
    }
  },
  getStatus: async (req, res, next) => {
    try {
      const status = await Player.getPlayerStatus(req.params.identity);
      res.status(200).json({ message: 'success', data: status });
    } catch (e) {
      next(e);
    }
  },
  givePoints: async (req, res, next) => {
    try {
      const { identity, amount } = req.params;
      const status = await Player.givePoints(identity, amount);
      res.status(200).json({ message: 'success', data: status });
    } catch (e) {
      next(e);
    }
  },
};
