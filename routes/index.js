import { Router } from 'express';
import usersRouter from './users.js';

const mainRouter = Router();

mainRouter.use('/users', usersRouter);

mainRouter.get('/', (req, res) => {
  res.send('Hello from the main router!');
});

mainRouter.get('/about', (req, res) => {
  res.send('About Us');
});

mainRouter.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

export default mainRouter;