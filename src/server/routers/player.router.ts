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
    this.router.post('/', playerController.create);
    this.router.put('/:playerId', playerController.edit);
    this.router.delete('/:playerId', playerController.delete);
    this.router.put('/:playerId/status', playerController.updateStatus);
    this.router.put('/points/:identity/:amount', playerController.givePoints);
    this.router.get('/:identity/status', playerController.getStatus);
  }
}

const playerRouter = new PlayerRouter();

export { playerRouter };
