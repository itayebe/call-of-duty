import express from 'express';
import 'dotenv/config';

export const app = express();

app.get('/health', (req, res) => {
  res.status(200).send('health');
});
