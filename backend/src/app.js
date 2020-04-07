import express from 'express';
import cors from 'cors';

import routes from './routes';

class App {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.express.use(routes);
  }

  middlewares() {
    this.express.use(cors());
  }
}

export default new App().express;
