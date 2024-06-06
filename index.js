import express from 'express';
import mainRouter from './routes/index.js';

const app = express();
const port = 3000;

app.use(mainRouter);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});