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
    this.router.get('/', playerController.filter);
    this.router.post('/', playerController.filter);
    this.router.put('/:playerId', playerController.filter);
    this.router.delete('/:playerId', playerController.filter);
    this.router.put('/:playerId/status', playerController.filter);
  }
}

const playerRouter = new PlayerRouter();

export { playerRouter };
