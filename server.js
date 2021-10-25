import express from 'express';
import fetcher from './fetchApi.js';

const app = express();

app.get('/', async (req, res) => {
  let response = await fetcher();
  res.send(response);
});

app.listen(process.env.PORT || '42069', () => {
  console.log(`Chill app listening at http://localhost:42069, nice.`);
});
