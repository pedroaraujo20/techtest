import { Router } from 'express';
import TrmController from './app/controllers/TrmController';

const routes = new Router();

export default routes;

routes.get('/trm', TrmController.index);
routes.post('/trm', TrmController.store);
