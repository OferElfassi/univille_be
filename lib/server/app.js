import express from 'express';
// import AuthRouter from './routers/auth.router';
// import UserRouter from './routers/user.router';
import { playerRouter } from './routers';
import { isError, isAlive } from './middleware';

class App {
  app;

  constructor() {
    this.app = express();
    this.setupGlobalMiddleware();
    this.setupRouters();
  }

  start(port = 3000) {
    return this.app.listen(port, () => {
      console.log(`listening on :${port}`);
    });
  }

  setupGlobalMiddleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  setupRouters() {
    this.app.get('/', isAlive);
    this.app.use('/api/v1/players', playerRouter.getRouter());
    this.app.use(isError);
  }
}

export default new App();
