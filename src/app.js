import express from 'express';
import 'dotenv/config';
import { addSoldier } from './mongodb.js';

export const app = express();

app.get('/health', (req, res) => {
  res.status(200).send('health');
});

app.post('/soldiers', (req, res) => {
  addSoldier(req.body);
  res.status(201);
});
