import express, { Application } from 'express';
// import AuthRouter from './routers/auth.router';
// import UserRouter from './routers/user.router';
import morgan from 'morgan';
import path from 'path';

import { playerRouter } from './routers';
import { isError, isAlive } from './middleware';

// localhost:3000/api/v1/players/join/DekelBD/123456
class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.setupGlobalMiddleware();
    this.setupRouters();
  }

  start(port: string | number = 3000) {
    return this.app.listen(port, () => {
      console.log(`listening on :${port}`);
    });
  }

  private setupGlobalMiddleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan('combined'));
  }

  private setupRouters() {
    this.app.get('/', isAlive);
    this.app.use('/api/v1/players', playerRouter.getRouter());
    this.app.use(isError);
  }
}

export default new App();
