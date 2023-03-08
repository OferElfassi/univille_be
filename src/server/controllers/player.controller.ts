import { IPlayer, MissionModel, PlayerModel } from 'src/database';

interface IPlayerController {
  filter: IControlFn<Partial<IPlayer>>;
  create: IControlFn<IPlayer>;
  edit: IControlFn<Partial<IPlayer>, { playerId: string }>;
  delete: IControlFn<never, { playerId: string }>;
  // updateStatus: IControlFn<Partial<IStatus>, { playerId: string }>;
  // getStatus: IControlFn<never, { identity: string }>;
  givePoints: IControlFn<never, { identity: string; amount: number }>;
  getMission: IControlFn<never, never>;
  getColor: IControlFn<never, never>;
}

export const playerController: IPlayerController = {
  filter: async (req, res, next) => {
    try {
      const players = await PlayerModel.filterPlayers(req.body);
      res.status(200).json({ message: 'success', data: players });
    } catch (e) {
      next(e);
    }
  },
  create: async (req, res, next) => {
    try {
      const player = await PlayerModel.createPlayer(req.body);
      res.status(200).json({ message: 'success', data: player });
    } catch (e) {
      next(e);
    }
  },
  edit: async (req, res, next) => {
    try {
      const player = await PlayerModel.findById(req.params.playerId);
      const updatedPlayer = await player.editInfo(req.body);
      res.status(200).json({ message: 'success', data: updatedPlayer });
    } catch (e) {
      next(e);
    }
  },
  delete: async (req, res, next) => {
    try {
      await PlayerModel.findByIdAndRemove(req.params.playerId);
    } catch (e) {
      next(e);
    }
  },
  // updateStatus: async (req, res, next) => {
  //   try {
  //     const player = await PlayerModel.findById(req.params.playerId);
  //     // const updatedPlayer = await player.updateStatus(req.body);
  //     res.status(200).json({ message: 'success', data: updatedPlayer });
  //   } catch (e) {
  //     next(e);
  //   }
  // },
  // getStatus: async (req, res, next) => {
  //   try {
  //     const status = await Player.getPlayerStatus(req.params.identity);
  //     res.status(200).json({ message: 'success', data: status });
  //   } catch (e) {
  //     next(e);
  //   }
  // },
  givePoints: async (req, res, next) => {
    try {
      const { identity, amount } = req.params;
      const status = await PlayerModel.givePoints(identity, amount);
      res.status(200).json({ message: 'success', data: status });
    } catch (e) {
      next(e);
    }
  },
  getMission: async (req, res, next) => {
    try {
      const mission = createMission();
      res.status(200).json({ message: 'success', data: mission });
    } catch (e) {
      next(e);
    }
  },
  getColor: async (req, res, next) => {
    try {
      const color = randomColor();
      res.status(200).json({ message: 'success', data: color });
    } catch (e) {
      next(e);
    }
  },
};

const randomColor = () => {
  const colors = [
    'red',
    'blue',
    'yellow',
    'green',
    'orange',
    'purple',
    'pink',
    'brown',
    'gray',
    'black',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const randomCoordinatesInIsraelRamatGan = () => {
  const lat = Math.random() * (32.1 - 32.0) + 32.0;
  const lng = Math.random() * (34.9 - 34.8) + 34.8;
  return { lat, lng };
};

const randomHintText = () => {
  const hints = [
    'מספר זה נמצא בכל חדר בבית',
    'אתה יכול לראות אותו בכל יום',
    'שימו לב לזה בכל יום',
    'אתה יכול לראות אותו בכל יום',
  ];
  return hints[Math.floor(Math.random() * hints.length)];
};

const createMission = () => ({
  location: randomCoordinatesInIsraelRamatGan(),
  hintText: randomHintText(),
});
