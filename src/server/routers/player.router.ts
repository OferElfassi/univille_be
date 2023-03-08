import { Router } from 'express';
import { playerController } from '../controllers';

class PlayerRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.setup();
  }

  getRouter() {
    return this.router;
  }

  private setup() {
    this.router.get('/join/:identity/:gameCode', playerController.joinGame);
    this.router.get(
      '/found/:identity/:gameCode/:missionId',
      playerController.setAchievement
    );
  }
}

const playerRouter = new PlayerRouter();

export { playerRouter };
