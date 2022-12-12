// src/application.ts
import express, { Application as ExApplication } from 'express';

class Application {
  private readonly _instance: ExApplication;

  get instance(): ExApplication {
    return this._instance;
  }

  constructor() {
    this._instance = express();
    this._instance.use(express.json());
    this.registerRouters();
  }

  private registerRouters() {
    this._instance.get('/', (req, res) => {
      res.json({ message: 'Hello World!' });
    });
    // TODO: register routers
  }
}

export const App = new Application();
