import express from 'express';

import routes from './routes';

class App {
  constructor() {
    this.express = express();
    this.routes();
  }

  routes() {
    this.express.use(routes);
  }
}

export default new App().express;
