import express from 'express';
import fetcher from './fetchApi.js';
import axios from 'axios';
import { Sequelize } from 'sequelize';

const app = express();
const port = 42069;

app.get('/', async (req, res) => {
  let response = await fetcher();
  res.send(response);
});

app.listen(port, () => {
  axios.get(`http://localhost:${port}`);
  console.log(`Chill app listening at http://localhost:${port}, nice.`);
});
